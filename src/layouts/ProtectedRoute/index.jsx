import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "src/context/UserContext";
import MainLayout from "src/layouts/MainLayout";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { userId, department } = useContext(UserContext);

  useEffect(() => {
    if (!userId) {
      navigate("/login");
    } else {
      navigate("/");
    }
  }, []);

  return <MainLayout>{children}</MainLayout>;
}

export default ProtectedRoute;
