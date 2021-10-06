import React from "react";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Reload } from "../Buscar";

import { NavBar } from "./style";
function Navbar() {
  return (
    <Router>
      <NavBar>
        <div className="navbar-menu">
          <ul className="menu-select">
            <li className="badge">
              <h1>CEPVIEW</h1>
            </li>
            <div className="select">
              <li>Pagina Inicial</li>
              <li>
                <Link className="test" to="/buscar">
                  Buscar
                </Link>
              </li>
            </div>
            <div className="input-label">
              <li>
                <input type="text" name="" />
                <span>
                  <button>Pesquisar</button>
                </span>
              </li>
            </div>
          </ul>
          <Switch>
            <Route path="/buscar" component={Reload} />
          </Switch>
        </div>
      </NavBar>
    </Router>
  );
}

export default Navbar;
