import React, { FC, PropsWithChildren, useContext } from "react";
import { TabsContext } from "./TabsProvider";

export interface IPanelProps extends PropsWithChildren {
  index?: number;
}
export const Panel: FC<IPanelProps> = ({ children, index }) => {
  const { selected } = useContext(TabsContext);
  if (index === undefined) return null;

  return (
    <div
      className="tab-panel"
      role="tabpanel"
      style={{ display: selected === index ? "flex" : "none" }}
    >
      {children}
    </div>
  );
};
