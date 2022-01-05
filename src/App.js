import "./App.css";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

function App() {
  const isLoggedIn = localStorage.getItem("user-token") ? localStorage.getItem("user-token") : false;

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={() => <Login />} />
        <Route exact path="/" component={() => (isLoggedIn ? <Dashboard /> : <Redirect to={{ pathname: "/login" }} />)} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
