import { SET_HAS_SUCCESS } from "../actions/app";

const initialState = {
  hasError: false,
  hasSuccess: false,
  isLoading: false
};
const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HAS_SUCCESS:
      return state;
    default:
      return state;
  }
};

export default AppReducer;
