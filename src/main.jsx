import ReactDOM from "react-dom/client";
import "./styles/global.scss";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={routes} />
);
