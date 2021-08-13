import { combineReducers } from "redux";

import HomeReducer from "../Home/HomeReducer";

const reducers = combineReducers({
  //state

  home: HomeReducer,
  //  home: HomeReducer, is mn hm (home) jo h y hm jhan store create krty hn whan use krty hn means jhan hm (dispatch )
  //krty hn r (HomeReducer)=> y basically reducer file mn jo (homeliststore[]) h y wo hota h r dispatch mn hm is ko (homeliststore[])
  // ky name sy lyn gy
});
export default reducers;
