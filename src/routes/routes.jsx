import { createBrowserRouter } from "react-router-dom";

import BillingsPage from "src/pages/BillingsPage";
import HomePage from "../pages/HomePage";
import LoginPage from "src/pages/LoginPage";
import UsersPage from "src/pages/UsersPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/users",
    element: <UsersPage />
  },
  {
    path: "/billings",
    element: <BillingsPage />
  },
  {
    path: "/login",
    element: <LoginPage />
  }
]);

export default routes;
