import { combineReducers } from "redux";
import { SAVE_SENT_EMAIL, SEND_EMAIL_ERROR } from "./action";

const initialState = { sendEmail: [], isEmailSent: false, isAPIError: false };

export const emailReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_SENT_EMAIL:
      return {
        ...state,
        sendEmail: [...state.sendEmail, action.payload],
        isEmailSent: true,
        isAPIError: false
      };
    case SEND_EMAIL_ERROR:
      return { ...state, isAPIError: true };

    default:
      return state;
  }
};

const reducer = combineReducers({ entity: emailReducer });
export default reducer;
