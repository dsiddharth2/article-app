import { takeEvery, call, put } from "redux-saga/effects";
import { LOAD_ARTICLES } from './constants';

export default function* watcherSaga() {
    yield takeEvery(LOAD_ARTICLES, workerSaga);
}

function* workerSaga() {
    try {
      const payload = yield call(getData);
      console.log(payload);
      yield put({ type: "DATA_LOADED", payload });
    } catch (e) {
      yield put({ type: "API_ERRORED", payload: e });
    }
}

function getData() {
    return fetch("https://jsonplaceholder.typicode.com/posts")
        .then(function(response) {
            console.log(response);
            response.json()
        });
}