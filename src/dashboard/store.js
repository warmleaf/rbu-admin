import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import reducer from "./reducer";
import api from "./api-middleware";

const middleware = [thunk, api({ method: "POST", credentials: "include" })];
if (process.env.NODE_ENV !== "production") {
  middleware.push(createLogger());
}

export default preloadedState => {
  const store = createStore(
    reducer,
    preloadedState,
    applyMiddleware(...middleware)
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("./reducer", () => {
      store.replaceReducer(reducer);
    });
  }

  return store;
};
