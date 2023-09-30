import "./logout.scss";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "src/context/UserContext";
import NavButton from "../../NavButton";

function Logout() {
  const navigate = useNavigate();
  const { setDepartment, setUserId } = useContext(UserContext);

  function handleLogout() {
    setUserId(null);
    setDepartment(null);
    navigate("/login");
  }
  return (
    <h3 className="logout" onClick={handleLogout}>
      Çıkış Yap
    </h3>
  );
}

export default Logout;
