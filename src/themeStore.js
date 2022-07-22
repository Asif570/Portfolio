import { createStore } from "redux";
import { useReducer } from "react";
const data = localStorage.getItem("darkMood");
const dm = () => {
  if (data === "true") {
    return true;
  } else {
    return false;
  }
};
const is = dm();
export const themereduser = (state = { darkMood: is | false }, action) => {
  switch (action.type) {
    case "toggle":
      return { darkMood: !state.darkMood };

    default:
      return state;
  }
};

export const store = createStore(themereduser);
