import { HomeActionType } from "../redux/actionsType";

import PostData from "../../helper/PostData";
export const getHomeList = () => {
  return (dispatch) => {
    try {
      dispatch({
        type: HomeActionType.GET_HOME_START,
      });
      homeListSuccess(dispatch, PostData);
      //(in these brackets we always have two states 2nd state is always going in reducer file jo payload ki sorat mn ja re h)
      // r array py us ko triger kia ja rha h
    } catch (error) {
      homeListFail(dispatch, error.message);
    }
  };
};

const homeListFail = (dispatch, errorMessage) => {
  dispatch({
    type: HomeActionType.GET_HOME_FAIL,
    payload: errorMessage,
  });
  alert(errorMessage);
};
const homeListSuccess = (dispatch, PostData) => {
  dispatch({
    type: HomeActionType.GET_HOME_SUCCESS,
    data: PostData,
    // it depends upon me i want to write data payload r something else
  });
};
export const deleteHomeList = (id) => {
  console.log(`id gbhvfv`, id);
  return (dispatch) => {
    try {
      dispatch({
        type: HomeActionType.DELETE_HOME_START,
      });
      const deleteHome = PostData.filter((h) => h.id != id);
      if (deleteHome) {
        deleteHomeSuccess(dispatch, deleteHome);
      } else {
        deleteHomeFail(dispatch, "post not deleted");
      }
    } catch (error) {
      deleteHomeFail(dispatch, error.Message);
    }
  };
};
const deleteHomeFail = (dispatch, errorMessage) => {
  dispatch({
    type: HomeActionType.DELETE_HOME_FAIL,
    payload: errorMessage,
  });
};
const deleteHomeSuccess = (dispatch, deleteHome) => {
  dispatch({
    type: HomeActionType.DELETE_HOME_SUCCESS,
    payload: deleteHome,
  });
  alert("post Deleted successfully");
};
