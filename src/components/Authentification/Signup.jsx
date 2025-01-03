import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupSuccess, signupFailure } from "../../redux/Signup/ActionCreator";
import img from "../../images/login.jpg"
import { useNavigate } from "react-router";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.users);
  const error = useSelector((state) => state.error);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [terms, setTerms] = useState(false);

  const validate = () => {
    if (!name || !email || !password || !confirmPassword || !terms) {
      dispatch(signupFailure("All fields are required."));
      return false;
    }
    if (password !== confirmPassword) {
      dispatch(signupFailure("Passwords do not match."));
      alert("Passwords do not match.");
      return false;
    }
    if (users.find((user) => user.email === email)) {
      dispatch(signupFailure("Email is already registered."));
      alert("Email is already registered.");
      return false;
    }
    return true;
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (validate()) {
      const newUser = {
        id: users.length + 1,
        name,
        email,
        password,
        role: "user",
      };
      dispatch(signupSuccess(newUser));
      alert('Registration successful!');
      navigate('/login');
      resetForm();
    }
  };
  console.log(users)

  const resetForm = () => {
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setTerms(false)
  };
  return (
    <div className="form-body">
      <div className="img">
        <img src={img} alt="imagLogin" />
      </div>
      <div className="form">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <div>
        <input type="checkbox" name="terms" id="terms" checked={terms} onChange={(e) => setTerms(e.target.checked)} />
        <label htmlFor="terms">I agree to the terms & policy</label>
        </div>
        {error && <p className="error">All fields are required.</p>}
        <button type="submit">Sign Up</button>
      </form>
      </div>
    </div>
  );
};

export default Signup;
