import { useSelector } from "react-redux";
import CreateCustomer from "../src/features/customers/CreateCustomer";
import Customer from "../src/features/customers/Customer";
import AccountOperations from "../src/features/accounts/AccountOperations";
import BalanceDisplay from "../src/features/accounts/BalanceDisplay";

function App() {
  const customer = useSelector((state) => state.customer.fullName);

  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      {customer === "" ? (
        <CreateCustomer />
      ) : (
        <>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </>
      )}
    </div>
  );
}

export default App;
