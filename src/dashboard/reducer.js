import { combineReducers } from "redux";
import isBrowserEnv from "../helpers/is_browser_env";

const STATE = {
  theme: "default",
  locale: isBrowserEnv("navigator", "language") || "en-US"
};

export const app = (state = STATE, { type, ...payload }) => {
  switch (type) {
    // data fetching
    case "FETCH_START":
    case "FETCH_SUCCESS":
      return { ...state, ...payload };
    case "FETCH_FAILURE":
      return { ...state, ...payload };
    case "UPDATE_LOCALE":
      return { ...state, ...payload };
    case "UPDATE_THEME":
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default combineReducers({ app });
