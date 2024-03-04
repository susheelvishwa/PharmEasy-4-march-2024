// SignUp.jsx

import axios from "axios";
import React, { useState } from "react";
import "./Signup.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Perform signup logic or send a request to your server

    let url = "http://localhost:8080/users";
    const response = await axios.post(url, {
      email: email,
      password: password,
    });

    console.log(response);

    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="signuppage">
      <h2 style={{ fontSize: "25px" }}>Sign Up</h2>
      <form className="signupform" onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            className="Input"
            placeholder="Enter your email id"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <br />
        <div>
          <label>Password:</label>
          <input
            className="Input1"
            placeholder="Enter your Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <br />
        <div>
          <label>Confirm Password:</label>
          <input
            className="Input2"
            placeholder="Enter your Confirm Password "
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <br />
        <br />
        <button className="submit" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
