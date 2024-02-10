import { combineReducers, createStore } from "redux";

const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const initialStateCustomer = {
  fullName: "",
  nationalId: "",
  createdAt: "",
};

function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };

    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };

    case "account/requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };

    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };

    default:
      return state;
  }
}

function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalId: action.payload.nationalId,
        createdAt: action.payload.createdAt,
      };

    case "customer/updateCustomer":
      return { ...state, fullName: action.payload };

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);

// store.dispatch({ type: "account/deposit", payload: 500 });
// console.log(store.getState());
// store.dispatch({ type: "account/withdraw", payload: 200 });
// console.log(store.getState());
// store.dispatch({
//   type: "account/requestLoan",
//   payload: { amount: 1000, purpose: "rent a house" },
// });
// console.log(store.getState());
// store.dispatch({ type: "account/payLoan" });
// console.log(store.getState());

// ACCOUNT STORE
function deposit(amount) {
  return { type: "account/deposit", payload: amount };
}
store.dispatch(deposit(500));
console.log(store.getState());

function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}
store.dispatch(withdraw(200));
console.log(store.getState());

function requestLoan(amount, purpose) {
  return { type: "account/requestLoan", payload: { amount, purpose } };
}
store.dispatch(requestLoan(1000, "rent a house"));
console.log(store.getState());

function payLoan(amount) {
  return { type: "account/payLoan" };
}
store.dispatch(payLoan());
console.log(store.getState());

// CUSTOMER STORE
function createCustomer(fullName, nationalId) {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalId, createdAt: new Date().toISOString() },
  };
}
store.dispatch(createCustomer("WALID DRA", "BA19909"));
console.log(store.getState());

function updateCustomer(fullName) {
  return { type: "customer/updateCustomer", payload: fullName };
}
store.dispatch(updateCustomer("WALID DRAA"));
console.log(store.getState());
