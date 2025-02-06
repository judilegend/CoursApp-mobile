import React, { createContext, useContext, useState } from "react";

type TabContextType = {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
};

const TabContext = createContext<TabContextType | undefined>(undefined);

export const TabProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentTab, setCurrentTab] = useState("home");

  return (
    <TabContext.Provider value={{ currentTab, setCurrentTab }}>
      {children}
    </TabContext.Provider>
  );
};

export const useTab = () => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error("useTab must be used within a TabProvider");
  }
  return context;
};
