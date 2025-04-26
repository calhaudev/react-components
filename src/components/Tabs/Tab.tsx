import React, { FC, PropsWithChildren, useContext } from "react";
import { TabsContext } from "./TabsProvider";

export interface ITabProps extends PropsWithChildren {
  index?: number;
}
export const Tab: FC<ITabProps> = ({ index, children }) => {
  const { focusTab, handleSelected, selected, totalTabs } =
    useContext(TabsContext);
  if (index === undefined) return null;
  const isSelected = selected === index;

  return (
    <span
      className={`tab${isSelected ? " active" : ""}`}
      role="tab"
      aria-selected={isSelected}
      onClick={() => handleSelected(index)}
      tabIndex={index}
      onKeyDown={(e) => {
        console.log({ key: e.key });
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleSelected(index);
        } else if (e.key === "ArrowRight") {
          e.preventDefault();
          if (index === totalTabs - 1) return;
          focusTab(index + 1); // Move focus to the next tab
        } else if (e.key === "ArrowLeft") {
          e.preventDefault();
          if (index === 0) return;
          focusTab(index - 1); // Move focus to the previous tab
        }
      }}
    >
      {children}
    </span>
  );
};
