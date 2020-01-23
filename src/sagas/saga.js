import { takeEvery, takeLatest, delay, put } from "redux-saga/effects";

// Add

function* addAsync(action) {
  yield delay(2000);
  yield put({ type: "ADD_ASYNC", num1: action.num1, num2: action.num2 });
}

export function* watchAdd() {
  yield takeEvery("ADD", addAsync);
}

// Sub

function* subAsync(action) {
  yield delay(2000);
  yield put({ type: "SUB_ASYNC", num1: action.num1, num2: action.num2 });
}

export function* watchSub() {
  yield takeLatest("SUB", subAsync);
}
