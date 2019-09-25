/**
 * Create the store
 */
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./containers/App/reducers";
import createSagaMiddleware from "redux-saga";
import sagas from './containers/App/sagas';

const initialiseSagaMiddleware = createSagaMiddleware();

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create store and wireup sagas
const store = createStore(
    rootReducer,
    storeEnhancers(
      applyMiddleware(initialiseSagaMiddleware)
    )
);

initialiseSagaMiddleware.run(sagas);

// Export the store
export default store;