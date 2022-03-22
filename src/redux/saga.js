import { call, put, takeEvery } from "redux-saga/effects";
import { saveSentEmail, SENDEMAIL, sentEmailError } from "./action";
import { api } from "./api";

export const sendEmails = async (data) => {
  return await api.post("/sendEamil", data);
};

function* sendEmail({ payload }) {
  try {
    debugger;
    const response = yield call(sendEmails, payload);

    if (response && response.status === 200) {
      yield put(saveSentEmail(payload));
    } else {
      yield put(sentEmailError());
    }
  } catch (error) {
    yield put(sentEmailError());
  }
  return;
}

function* rootSaga() {
  yield takeEvery(SENDEMAIL, sendEmail);
}

export default rootSaga;
