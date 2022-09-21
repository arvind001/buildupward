import { ADD_BUILDING } from "./types";

export const addBuilding = (buildings) => (dispatch) => {
  console.log("what is building", dispatch);
  return dispatch({
    type: ADD_BUILDING,
    payload: buildings,
  });
};
