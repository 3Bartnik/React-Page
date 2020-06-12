import React from "react";
import "./Nav.css";
import logoEP from "./logo.png";
// import {Link} from 'react-router-dom';
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <section>
      <ul className="nav">
        <li className="nav-items">
          <NavLink exact activeClassName="active" className="nav_link" to="/">
            <img className="logo" src={logoEP} alt="logo company" />
          </NavLink>
        </li>

        <li className="nav-items">
          <NavLink activeClassName="active" to="/about" className="nav_link">
            O mnie
          </NavLink>
        </li>
        <li className="nav-items">
          <NavLink activeClassName="active" to="/artistic" className="nav_link">
            Fotografia
          </NavLink>
        </li>
        <li className="nav-items">
          <NavLink activeClassName="active" to="/studio" className="nav_link">
            Studio
          </NavLink>
        </li>
        <li className="nav-items">
          <NavLink activeClassName="active" to="/price" className="nav_link">
            Cennik
          </NavLink>
        </li>
        <li className="nav-items">
          <NavLink activeClassName="active" to="contact" className="nav_link">
            Kontakt
          </NavLink>
        </li>
      </ul>
    </section>
  );
};

export default Nav;
