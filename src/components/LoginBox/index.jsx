import Button from "../Button";
import Input from "../Input";
import Label from "../Label";
import "./loginBox.scss";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { usersData } from "src/data/index";
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
    <div className="loginBox">
      <div className="input-container">
        <Label>Email</Label>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          full
        />
      </div>
      <div className="input-container">
        <Label>Şifre</Label>
        <Input
          full
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Button onClick={handleLogin} full>
        Giriş Yap
      </Button>
    </div>
  );
};

export default index;
