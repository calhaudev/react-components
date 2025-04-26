import React, {
  createContext,
  FC,
  PropsWithChildren,
  useMemo,
  useState,
} from "react";

export const TabsContext = createContext({
  focusTab: (index: number) => {},
  handleSelected: (index: number) => {},
  handleTotalTabs: (total: number) => {},
  selected: 0,
  totalTabs: 0,
});
export const TabsProvider: FC<PropsWithChildren> = ({ children }) => {
  const [totalTabs, setTotalTabs] = useState<number>(0);
  const [selected, setSelected] = useState<number>(0);

  const value = useMemo(() => {
    const focusTab = (index: number) => {
      const tabs = document.querySelectorAll('[role="tab"]');
      if (index >= 0 && index < tabs.length) {
        (tabs[index] as HTMLElement).focus();
      }
    };

    return {
      focusTab,
      handleSelected: (index: number) => setSelected(index),
      handleTotalTabs: (total: number) => setTotalTabs(total),
      selected,
      totalTabs,
    };
  }, [selected, setSelected, totalTabs, setTotalTabs]);

  return <TabsContext.Provider value={value}>{children}</TabsContext.Provider>;
};
