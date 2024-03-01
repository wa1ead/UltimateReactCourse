import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import GlobalStyles from "../src/styles/GlobalStyles";
import Dashboard from "./pages/Dashboard";
import Cabins from "./pages/Cabins";
import Bookings from "./pages/Bookings";
import Login from "./pages/Login";
import Account from "./pages/Account";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="cabins" element={<Cabins />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="login" element={<Login />} />
          <Route path="account" element={<Account />} />
          <Route path="users" element={<Users />} />
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
