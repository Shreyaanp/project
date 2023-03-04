import {  createContext } from "react";
import dataget from "../src/data/data";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const data = dataget;

  return (
    <Context.Provider value={{ data}}>
      {children}
    </Context.Provider>
  );
}
export default Context;