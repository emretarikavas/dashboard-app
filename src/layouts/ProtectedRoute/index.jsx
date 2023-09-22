import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import MainLayout from "src/layouts/MainLayout";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    const department = localStorage.getItem("department");
    if (!department) {
      navigate("/login");
    }
  }, [navigate]);

  return <MainLayout>{children}</MainLayout>;
}

export default ProtectedRoute;
