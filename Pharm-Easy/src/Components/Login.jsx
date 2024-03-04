// Login.jsx
import "./Login.css";
import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    let url = `http://localhost:8080/users?email=${email}`;
    const response = await axios.get(url);
    if (response.data == "") {
      console.log(response);
      alert("user not found");
    } else {
      if (response.data[0].password == password) {
        alert("Succesfully logged in");
      } else {
        alert("password not matched");
      }
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="loginpage">
      <form className="login" onSubmit={handleSubmit}>
        <h1 className="loginname">Login</h1>
        <br />
        <div className="gapp">
          <label>Email:</label>
          <input
            className="Input"
            type="email"
            placeholder="Enter Your Email ID ..."
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
            placeholder="Enter Your Password ..."
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <br />
        <br />
        <button className="submitt" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
