import { createBrowserRouter } from "react-router-dom";

import BillingsPage from "src/pages/BillingsPage";
import HomePage from "src/pages/HomePage";
import LoginPage from "src/pages/LoginPage";
import UsersPage from "src/pages/UsersPage";
import ProtectedRoute from "src/layouts/ProtectedRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        element: <HomePage />,
        index: true
      },
      {
        path: "users",
        element: <UsersPage />
      },
      {
        path: "billings",
        element: <BillingsPage />
      }
    ]
  },
  {
    path: "login",
    element: <LoginPage />
  }
]);

export default routes;
