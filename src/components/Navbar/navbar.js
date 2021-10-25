import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

export default function Navbar() {
  return (
    <header>
      <div className="wrapper flex">
        {/* Navbar Logo */}
        <NavLink to="/" className="header__logo">
          Logo
        </NavLink>

        {/* Language Switcher */}
        <Dropdown className="dropdown">
          <Dropdown.Toggle className="dropdown-ui flex" id="dropdown-basic">
            <i className="fas fa-globe"></i> uz
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>en</Dropdown.Item>
            <Dropdown.Item>ru</Dropdown.Item>
            <Dropdown.Item>uz</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        {/* Navbar */}
        <ul className="nav flex">
          <li className="nav__item">
            <NavLink
              exact
              className="nav__link"
              activeClassName="active"
              to="/"
            >
              Katalog
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              exact
              className="nav__link"
              activeClassName="active"
              to="/manager"
            >
              Menejer
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              exact
              className="nav__link"
              activeClassName="active"
              to="/credit"
            >
              Kredit
            </NavLink>
            <a href="#" className="nav__link"></a>
          </li>
          <li className="nav__item">
            <NavLink
              exact
              className="nav__link"
              activeClassName="active"
              to="/honeymoon"
            >
              Asal oyi
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              exact
              className="nav__link"
              activeClassName="active"
              to="/portfolio"
            >
              Portfolio
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              exact
              className="nav__link"
              activeClassName="active"
              to="/contact"
            >
              Aloqa
            </NavLink>
          </li>
        </ul>
        {/* Panel */}
        <div className="header__panel flex">
          <button className="btn btn-white">Kirish</button>
          <button className="btn btn-crimson flex">
            <i className="far fa-user-alt"></i> Registratsiya
          </button>
        </div>
        <i className="fas fa-bars nav__control"></i>
      </div>
    </header>
  );
}
