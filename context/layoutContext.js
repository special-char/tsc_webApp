import React, { createContext, useState } from "react";

export const LayoutContext = createContext(false);

export const LayoutProvider = ({ children }) => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  return (
    <LayoutContext.Provider value={{ isHeaderVisible, setIsHeaderVisible }}>
      {children}
    </LayoutContext.Provider>
  );
};
