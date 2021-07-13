import { createStore } from "redux";
import { combineReducers, applyMiddleware } from "redux";
import cakeReducer from "./cakeReducer";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import iceCreamReducer from "./iceCreamReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: iceCreamReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger))
);

export default store;
