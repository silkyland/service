import { createStore, compose, applyMiddleware } from "redux";
import RootReducer from "./reducers/RootReducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const Store = createStore(
  RootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default Store;
