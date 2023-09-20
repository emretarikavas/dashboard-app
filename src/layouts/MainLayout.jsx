import { Outlet } from "react-router-dom";
import Navbar from "src/components/Navbar";
import Sidebar from "src/components/Sidebar";

function MainLayout() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Outlet />
    </>
  );
}

export default MainLayout;
