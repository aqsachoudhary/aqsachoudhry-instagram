import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import Reducers from "./reducers/index";

const store = createStore(
  Reducers,
  composeWithDevTools(applyMiddleware(thunk)) //for showing dev extension in browser
);
export default store;
