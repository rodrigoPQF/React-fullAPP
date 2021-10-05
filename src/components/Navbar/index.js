import React from "react";

import { NavBar } from "./style";

function Navbar() {
  return (
    <NavBar>
      <div className="navbar-menu">
        <ul className="menu-select">
          <li className="badge">
            <h1>CEPVIEW</h1>
          </li>
          <div className="select">
            <li>BUSCAR</li>
            <li>MAPA</li>
            <li>SOBRE</li>
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
      </div>
    </NavBar>
  );
}

export default Navbar;
