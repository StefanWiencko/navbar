import { useState } from "react";
import "./App.scss";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { PrivateComponent } from "./components/PrivateComponent";
import { NavLink, Switch, Route } from "react-router-dom";
import { MdSearch } from "react-icons/md";
import logo from "./assets/logo.png";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const clickHandler = () => setIsLogged((flag) => !flag);
  return (
    <div className="App">
      <Switch>
        <nav>
          <div>
            <img src={logo} alt="" className="logo" />
            <NavLink to="">Wydarzenia</NavLink>
            <NavLink className="contact" to="">
              Kontakt
            </NavLink>
            <NavLink to="">Wesprzyj Nas</NavLink>
          </div>
          <div>
            <NavLink className="navbarIcon" to="">
              <MdSearch size="28px" />
            </NavLink>
            <Route exact path="/">
              <NavLink className="loginButton" to="/logged">
                Zaloguj się
              </NavLink>
            </Route>
            <ProtectedRoute path="/logged" isLogged={isLogged}>
              <PrivateComponent />
            </ProtectedRoute>
          </div>
        </nav>
      </Switch>
      <div className="toggleCredentials">
        <span>Toggle credentials</span>
        <input
          type="checkbox"
          className="credentialsButton"
          onClick={clickHandler}
        />
      </div>
    </div>
  );
}

export default App;
