import React, { createContext, useState, useMemo } from "react";

const PropertiesContext = createContext("Default value");

const PropertiesProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchInput, setSeacrhInput] = useState("");

  const providerState = useMemo(
    () => ({
      searchInput,
      setSeacrhInput,
    }),
    [
      searchInput,
      setSeacrhInput,
    ],
  );

  return (
    <PropertiesContext.Provider value={providerState}>
      {children}
    </PropertiesContext.Provider>
  );
};

export { 
  PropertiesContext, 
  PropertiesProvider, 
};
