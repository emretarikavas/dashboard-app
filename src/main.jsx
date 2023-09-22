import ReactDOM from "react-dom/client";
import "./styles/global.scss";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import { FakeDataProvider } from "src/context/useFakeData";

ReactDOM.createRoot(document.getElementById("root")).render(
  <FakeDataProvider>
    <RouterProvider router={routes} />
  </FakeDataProvider>
);
