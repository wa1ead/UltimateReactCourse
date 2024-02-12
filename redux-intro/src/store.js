import { combineReducers, createStore } from "redux";
import customerReducer from "../src/features/customers/CustomerSlice";
import accountReducer from "../src/features/accounts/AccountSlice";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);

export default store;
