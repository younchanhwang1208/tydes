import React, { createContext, useState, useContext, useEffect } from 'react';

// Create a Context for Tab Bar visibility
const TabBarVisibilityContext = createContext();

export const useTabBarVisibility = () => useContext(TabBarVisibilityContext);

export const TabBarVisibilityProvider = ({ children }) => {
  const [hideTabBar, setHideTabBar] = useState(false);

  return (
    <TabBarVisibilityContext.Provider value={{ hideTabBar, setHideTabBar }}>
      {children}
    </TabBarVisibilityContext.Provider>
  );
};
