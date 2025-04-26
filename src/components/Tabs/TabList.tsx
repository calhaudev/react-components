import React, {
  FC,
  PropsWithChildren,
  ReactElement,
  useContext,
  useEffect,
} from "react";
import { ITabProps, Tab } from "./Tab";
import { TabsContext } from "./TabsProvider";

export const TabList: FC<PropsWithChildren> = ({ children }) => {
  const { handleTotalTabs } = useContext(TabsContext);

  const tabs = React.Children.toArray(children).filter(
    (child) => React.isValidElement(child) && child.type === Tab
  ) as ReactElement[];

  useEffect(() => {
    if (tabs.length > 0) {
      handleTotalTabs(tabs.length);
    }
  }, []);

  if (tabs.length === 0) {
    throw new Error("Tab component is missing.");
  }

  return (
    <div className="tab-list" role="tablist">
      {React.Children.map(tabs, (child, index) =>
        React.isValidElement(child)
          ? React.cloneElement(child, { index } as ITabProps)
          : child
      )}
    </div>
  );
};
