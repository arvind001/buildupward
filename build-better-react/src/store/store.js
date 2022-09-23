import React, { createContext, useReducer } from "react";
import cloneDeep from "lodash/cloneDeep";

const initialState = {
  myBuildings: [],
};

const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "ADD_BUILDING":
        console.log("what is payload", action.payload, action.type);
        return {
          ...state,
          myBuildings: cloneDeep(action.payload),
        };
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
