import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess, loginFailure } from "../../redux/Signup/ActionCreator";
import img from "../../images/login.jpg";
import { useNavigate } from "react-router";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.users);
  const error = useSelector((state) => state.error);
  

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = users.find((user) => user.email === email);

  const validate = () => {
    if (!email || !password) {
      dispatch(loginFailure("All fields are required."));
      return false;
    }
    if (!user) {
      dispatch(loginFailure("User not found."));
      return false;
    }
    if (password !== user.password) {
      dispatch(loginFailure("Incorrect password."));
      return false;
    }
    return true;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      dispatch(loginSuccess({ username: user.username, role: user.role }));
      navigate("/");
      resetForm();
    }
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <div className="form-body">
      <div className="img">
        <img src={img} alt="Login" />
      </div>
      <div className="form">
        <h2>Log in</h2>
        <form onSubmit={handleLogin}>
          <div className="inputsFields">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit">Log in</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
