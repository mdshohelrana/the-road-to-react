import React, { useContext } from "react";
import { AuthContext } from "../AuthContext";
import { Link } from "react-router-dom";

export default function Navbar() {
  const authContext = useContext(AuthContext);

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    authContext.setAuth({});
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mt-2 mb-2">
        <Link className="navbar-brand" to="#">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link " to="/home">
              Home
            </Link>
            <Link className="nav-item nav-link" to="/feathres">
              Features
            </Link>
            <Link className="nav-item nav-link" to="/register">
              Register
            </Link>
            <Link
              onClick={logout}
              className="nav-item nav-link active"
              to="/"
              aria-disabled="true"
            >
              {authContext.auth.email ? "Logout" : "Login"}
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
