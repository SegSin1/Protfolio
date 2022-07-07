import { connectStorageEmulator } from "firebase/storage";
import { createContext, Provider, useReducer } from "react";


// https://www.youtube.com/watch?v=awGFsGc9oCM

const segevCtx = createContext();

export const SegevContextProvider = ({ children }) => {
  const DEFAULT_STATE = {
    value: "noValue",
    from: "noWhere",
  };

  const segevReducerFn = (state, action) => {
    const { payload, type } = action;
    switch (type) {
      case "ADD_TO_CART":
        return {
          value: payload,
          from: 1,
        };
      case "REMOVE_FROM_CART":
        return {
          value: payload,
          from: 2,
        };
      case "UPDATE_CART":
        return {
          value: payload,
          from: 3,
        };
      default:
        return DEFAULT_STATE;
    }
  };

  const [state, dispatchSegevReducer] = useReducer(
    segevReducerFn,
    DEFAULT_STATE
  );

  return (
    <segevCtx.Provider value={{ dispatchSegevReducer }}>
      {children}
    </segevCtx.Provider>
  );
};

export default segevCtx;
