import {
  VERFIY_LOGIN_PENDING,
  VERFIY_LOGIN_DONE,
  VERFIY_LOGIN_FAIL,
  VERFIY_REGISTER_DONE,
  VERFIY_REGISTER_FAIL,
  VERFIY_REGISTER_PENDING,
} from "./action";
const initialState = {
  isLoading: false,
  serverRes: {},
  error: {},
};

const rootReducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case VERFIY_LOGIN_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case VERFIY_LOGIN_DONE:
      return {
        ...state,
        isLoading: false,
        serverRes: action.result,
      };
    case VERFIY_LOGIN_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case VERFIY_REGISTER_PENDING:
      return {
        ...state,
        isLoading: false,
      };
    case VERFIY_REGISTER_DONE:
      return {
        ...state,
        isLoading: false,
        serverRes: action.result,
      };
    case VERFIY_REGISTER_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
  }
};

export default rootReducer;
