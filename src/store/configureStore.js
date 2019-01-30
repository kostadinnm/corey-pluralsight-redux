import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
// import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";

// initialState could be used in case of server-side rendering
export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk/*, reduxImmutableStateInvariant()*/)
  );
}
