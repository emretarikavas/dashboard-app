import Button from "../Button";
import Input from "../Input";
import "./loginBox.scss";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { usersData } from "src/data/index";
import dashboardImg from "src/assets/engineering_team.svg";
const index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const department = localStorage.getItem("department");
    if (department) {
      navigate("/");
    }
  }, [navigate]);

  const handleLogin = () => {
    const user = usersData.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      localStorage.setItem("department", user.department);
      navigate("/");
    } else {
      /*  */
    }
  };

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

export default index;
