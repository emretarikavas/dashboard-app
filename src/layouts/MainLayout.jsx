import { Outlet } from "react-router-dom";
import Navbar from "src/components/Navbar";
import Sidebar from "src/components/Sidebar";

function MainLayout() {
  return (
    <>
      <Navbar />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
}

export default MainLayout;
