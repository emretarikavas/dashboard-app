import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function RootPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const department = localStorage.getItem("department");
    if (department) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [navigate]);

  return null;
}

export default RootPage;
