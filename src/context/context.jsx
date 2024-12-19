import { createContext } from "react";

export const context = createContext();

const ContextProvider = (props) => {
  const contextValue = {};

  return (
    <ContextProvider.Provider value={contextValue}>{}</ContextProvider.Provider>
  );
};
