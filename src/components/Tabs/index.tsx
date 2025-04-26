import React, { FC, PropsWithChildren } from "react";
import { Tab } from "./Tab";
import { IPanelProps, Panel } from "./Panel";
import { TabList } from "./TabList";
import { TabListNotFound } from "./TabListNotFound";
import { TabsProvider } from "./TabsProvider";
import "./Tabs.css";

interface ITabs extends FC<PropsWithChildren> {
  Tab: typeof Tab;
  TabList: typeof TabList;
  Panel: typeof Panel;
}
export const Tabs: ITabs = ({ children }) => {
  const tabList = React.Children.toArray(children).filter(
    (child) => React.isValidElement(child) && child.type === TabList
  );
  const panels = React.Children.toArray(children).filter(
    (child) => React.isValidElement(child) && child.type === Panel
  );

  return (
    <TabsProvider>
      <div className="tabs-wrapper">
        {tabList.length !== 1 ? <TabListNotFound /> : tabList}
        {React.Children.map(panels, (child, index) =>
          React.isValidElement(child)
            ? React.cloneElement(child, { index } as IPanelProps)
            : child
        )}
      </div>
    </TabsProvider>
  );
};

Tabs.Tab = Tab;
Tabs.TabList = TabList;
Tabs.Panel = Panel;
