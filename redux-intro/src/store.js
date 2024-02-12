import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import customerReducer from "../src/features/customers/CustomerSlice";
import accountReducer from "../src/features/accounts/AccountSlice";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
