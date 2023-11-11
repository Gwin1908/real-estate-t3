/* eslint-disable @typescript-eslint/no-empty-function */
import React, {
  createContext,
  useState,
  useMemo,
  type Dispatch,
  type SetStateAction,
} from "react";

interface PropertiesContextType {
  searchInput: string;
  setSeacrhInput: Dispatch<SetStateAction<string>>;
}

const PropertiesContext = createContext<PropertiesContextType>({
  searchInput: "",
  setSeacrhInput: () => {},
});

const PropertiesProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchInput, setSeacrhInput] = useState("");

  const providerState = useMemo(
    () => ({
      searchInput,
      setSeacrhInput,
    }),
    [searchInput, setSeacrhInput],
  );

  return (
    <PropertiesContext.Provider value={providerState}>
      {children}
    </PropertiesContext.Provider>
  );
};

export { PropertiesContext, PropertiesProvider };
