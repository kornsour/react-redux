import { SIGN_IN, SIGN_OUT } from "../actions/types";

// variable names in all caps is used to let other engineers
// know to not modify this object under any circumstances
const INITIAL_STATE = {
  // set to null because we don't know if user is signed in or not on app load
  isSignedIn: null,
  userId: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, userId: action.payload };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null };
    default:
      return state;
  }
};
