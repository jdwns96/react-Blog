import { all, fork } from "redux-saga/effects";

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

export default function* rootSaga() {
  yield all([]);
}
