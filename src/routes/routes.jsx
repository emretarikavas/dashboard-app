import { createBrowserRouter } from "react-router-dom";

import BillingsPage from "src/pages/BillingsPage";
import HomePage from "src/pages/HomePage";
import LoginPage from "src/pages/LoginPage";
import UsersPage from "src/pages/UsersPage";
import MainLayout from "src/layouts/MainLayout";
import RootPage from "src/pages/RootPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
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
        path: "/billings",
        element: <BillingsPage />
      }
    ]
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "*",
    element: <RootPage />
  }
]);

export default routes;
