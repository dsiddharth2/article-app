import { takeEvery, call, put } from "redux-saga/effects";
import { LOAD_ARTICLES, ARTICLE_LOADED_SUCCESS, ARTICLE_LOADED_FAILED } from './constants';
import { loadedArticles } from './actions';

export default function* watcherSaga() {
    yield takeEvery(LOAD_ARTICLES, workerSaga);
}

function* workerSaga() {
    try {
        const payload = yield call(getData);
        yield put(loadedArticles(payload));
    } catch (e) {
        console.log(e);
        //yield put({ type: "API_ERRORED", payload: e });
    }
}

function getData() {
    return fetch("https://jsonplaceholder.typicode.com/posts")
        .then(function(response) {
            if(response.status === 200) {
                return response.json()
            } else {
                throw ("Failed to load the data");
            }
    });
}