import React, { useState, useContext } from "react";
import { AuthContext } from "../AuthContext";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authContext = useContext(AuthContext);

  const login = (e) => {
    e.preventDefault();
    if (password.length > 6) {
      const token = "abc";
      localStorage.setItem("token", token);
      localStorage.setItem("email", email);
      authContext.setAuth({ token, email });
    } else {
      alert("Username or Password incorect");
    }
  };
  const reset = () => {
    setEmail("");
    setPassword("");
  };
  return (
    <div className="container">
      <h1>Login Form</h1>
      <form>
        <input
          type="email"
          className="form-control"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          className="form-control"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button onClick={login} type="submit" className="btn btn-primary mr-2">
          Login
        </button>
        <button onClick={reset} type="reset" className="btn btn-danger">
          Reset
        </button>
      </form>
    </div>
  );
}
