import { Outlet } from "react-router-dom";
import Navbar2 from "src/components/NewComponents/Navbar2";
import Sidebar2 from "src/components/NewComponents/Sidebar2";

function MainLayout() {
  return (
    <>
      <Navbar2 />
      <div style={{ display: "flex" }}>
        <Sidebar2 />
        <Outlet />
      </div>
    </>
  );
}

export default MainLayout;
