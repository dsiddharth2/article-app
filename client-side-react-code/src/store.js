/**
 * Create the store
 */
import { createStore } from "redux";
import rootReducer from "./containers/App/reducers";

// Create the store
const store = createStore(rootReducer);

// Export the store
export default store;