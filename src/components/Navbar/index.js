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
        </ul>
      </div>
    </NavBar>
  );
}

export default Navbar;
