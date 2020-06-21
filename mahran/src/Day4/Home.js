import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import { AuthProvider, AuthContext } from "./AuthContext";

function Home() {
  const authContext = useContext(AuthContext);

  return (
    <div className="container">
      <Navbar />
      {authContext.auth.email ? "welcome" : <Login />}
    </div>
  );
}

function HomeWithStore() {
  return (
    <AuthProvider>
      <Home />
    </AuthProvider>
  );
}

export default HomeWithStore;
