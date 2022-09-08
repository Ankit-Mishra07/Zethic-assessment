import { RESULT_FAIL, RESULT_REQUEST, RESULT_SUCCESS } from "./actionTypes";
import { toast } from "react-toastify";
const baseURL = "https://zethic-task1.herokuapp.com/api";
export const makeResultAction = (payload) => async (dispatch) => {
  try {
    dispatch({ type: RESULT_REQUEST });

    let response = await fetch(`${baseURL}/navigate`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await response.json();

    if (data.length > 0) {
      dispatch({ type: RESULT_SUCCESS, payload: data });
      toast.success("Got the output successfully");
    } else {
      toast("Invalid Input!");
    }
  } catch (error) {
    dispatch({ type: RESULT_FAIL });
    toast.error(error.message);
  }
};
