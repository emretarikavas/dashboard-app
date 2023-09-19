// LoginPage.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { usersData } from "src/data/index";

function LoginPage() {
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
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginPage;
