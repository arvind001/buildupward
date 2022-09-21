import { ADD_BUILDING } from "../actions/types";

export default (state = { buildings: [] }, action) => {
  switch (action.type) {
    case ADD_BUILDING:
      console.log("i am being called", state, action);
      return {
        ...state,
        buildings: action.payload,
      };
    default:
      return state;
  }
};
