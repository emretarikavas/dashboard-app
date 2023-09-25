import ReactDOM from "react-dom/client";
import "./styles/global.scss";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import { UserProvider } from "./context/UserContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <RouterProvider router={routes} />
  </UserProvider>
);
