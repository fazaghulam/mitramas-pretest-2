import "./App.css";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

function App() {
  const isLoggedIn = localStorage.getItem("user-token") ? localStorage.getItem("user-token") : false;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route exact path="/" element={isLoggedIn ? <Dashboard /> : <Navigate to={{ pathname: "/login" }} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
