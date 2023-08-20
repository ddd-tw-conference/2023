import {
  createContext as createContextRaw,
  useContext as useContextRaw,
} from "react";

function createContext<T>() {
  const Context = createContextRaw<T | null>(null);
  function useContext() {
    const context = useContextRaw(Context);
    if (!context) {
      throw new Error("useContext must be inside a Provider with a value");
    }
    return context;
  }
  const Provider = Context.Provider;
  return { Provider, useContext };
}

export { createContext };
