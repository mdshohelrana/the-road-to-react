import React, { useContext } from "react";
import { AuthProvider, AuthContext } from "../AuthContext";

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
        <a className="navbar-brand" href="#">
          Navbar
        </a>
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
            <a className="nav-item nav-link " href="#">
              Home
            </a>
            <a className="nav-item nav-link" href="#">
              Features
            </a>
            <a className="nav-item nav-link" href="#">
              Regiter
            </a>
            <a
              onClick={logout}
              className="nav-item nav-link active"
              href="#"
              tabindex="-1"
              aria-disabled="true"
            >
              {authContext.auth.email ? "Logout" : "Login"}
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
