export const SET_HAS_SUCCESS = "SET_HAS_SUCCESS";
export const SET_HAS_ERROR = "SET_HAS_ERROR";
export const SET_LOADING_STATE = "SET_LOADING_STATE";

export const setSuccess = data => ({
  type: SET_HAS_SUCCESS,
  payload: data
});

export const setError = data => ({
  type: SET_HAS_ERROR,
  payload: data
});

export const setLoading = data => ({
  type: SET_LOADING_STATE,
  payload: data
});
