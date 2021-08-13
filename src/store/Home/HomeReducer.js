import { HomeActionType } from "../redux/actionsType";

const INITIAL_STATE = {
  loading: false,
  homeListStore: [],
  // y hmary pas puri ki puri list show krwat h y array =>(homeListStore: []),
  // y basically combinereducer h r action file sy 2nd state a re h jo data ya payload ki shkl mn success ky senario mn show ho re h
  homeDetail: {},
  //homeDetail: {}, y hmyn list ka object show krwata h
  errorMessage: "",
};

const HomeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HomeActionType.GET_HOME_START: {
      return {
        ...state,
        loading: true,
        errorMessage: "",
      };
    }
    case HomeActionType.GET_HOME_SUCCESS: {
      return {
        ...state,
        loading: false,
        homeListStore: action.data,
        //data means payload h because we can write anything its depends on u u want to write payload r something else
      };
    }
    case HomeActionType.GET_HOME_FAIL: {
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
      };
    }

    case HomeActionType.DELETE_HOME_START: {
      return {
        ...state,
        loading: true,
        errorMessage: "",
      };
    }
    case HomeActionType.DELETE_HOME_SUCCESS: {
      return {
        ...state,
        loading: false,
        homeListStore: action.payload,
      };
    }
    case HomeActionType.DELETE_HOME_FAIL: {
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default HomeReducer;
