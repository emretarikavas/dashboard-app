import Button from "../../../../components/Button";
import Input from "../../../../components/Input";
import "./loginBox.scss";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { usersData } from "src/data/index";
import dashboardImg from "src/assets/engineering_team.svg";
import { UserContext } from "src/context/UserContext";

const LoginBox = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { userId, setUserId, setDepartment, setUserRole } =
    useContext(UserContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const user = usersData.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      setUserId(user.id);
      setDepartment(user.department);
      setUserRole(user.role);
      navigate("/");
    } else {
      console.log("HATA");
    }
  };

  useEffect(() => {
    if (userId) {
      navigate("/");
    }
  }, [userId]);

  return (
    <form onSubmit={handleLogin} className="loginBox">
      <div className="img-container">
        <img src={dashboardImg} alt="" />
        <div className="title">
          <h2>GİRİŞ YAP</h2>
          <p>
            Hoşgeldiniz. Giriş yapmak için lütfen gerekli alanları doldurunuz...
          </p>
        </div>
      </div>
      <div className="input-container">
        <FaUser />
        <Input
          placeholder="E-Posta"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          full
        />
      </div>
      <div className="input-container">
        <RiLockPasswordFill />
        <Input
          placeholder="Parola"
          full
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Button full type="submit">
        Giriş Yap
      </Button>
    </form>
  );
};

export default LoginBox;
