import React, { useContext } from "react";
import Navbar from "./Day4/components/Navbar";
import Login from "./Day4/components/Login";
import { AuthProvider, AuthContext } from "./Day4/AuthContext";

function App() {
  const authContext = useContext(AuthContext);

  return (
    <div className="container">
      <Navbar />
      {authContext.auth.email ? "welcome" : <Login />}
    </div>
  );
}

function AppWithStore() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}

export default AppWithStore;
