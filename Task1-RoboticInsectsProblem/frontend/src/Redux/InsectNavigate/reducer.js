import { RESULT_FAIL, RESULT_REQUEST, RESULT_SUCCESS } from "./actionTypes";
const init = {
  isLoading: false,
  output: null,
  isError: false,
};
export const insectReducer = (state = init, { type, payload }) => {
  switch (type) {
    case RESULT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case RESULT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        output: payload,
      };
    case RESULT_FAIL:
      return {
        ...state,
        isError: true,
      };
    default:
      return state;
  }
};
