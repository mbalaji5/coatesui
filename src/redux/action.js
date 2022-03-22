export const SENDEMAIL = "SEND_EMAIL";
export const SAVE_SENT_EMAIL = "SAVE_SENT_EMAIL";
export const SEND_EMAIL_ERROR = "SEND_EMAIL_ERROR";
export const UPDATE_EMAIL_SENT = "SEND_EMAIL";

export const sendEmail = (payload) => ({ type: SENDEMAIL, payload });
export const saveSentEmail = (payload) => ({ type: SAVE_SENT_EMAIL, payload });
export const sentEmailError = (payload) => ({
  type: SEND_EMAIL_ERROR,
  payload
});

export const updateSentEmail = (payload) => ({
  type: UPDATE_EMAIL_SENT,
  payload
});
