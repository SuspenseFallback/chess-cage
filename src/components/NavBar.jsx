import "../css/components/Navbar.css";

import { NavLink, Outlet } from "react-router-dom";

import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <p className="nav-logo">Logo</p>
        <ul className="nav-items">
          <li className="nav-item">
            <NavLink className="nav-link" to="">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="play?time=bullet">
              Play
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="puzzles">
              Puzzles
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="lessons">
              Lessons
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="tools">
              Tools
            </NavLink>
          </li>
          <li className="nav-item nav-button first">
            <NavLink className="nav-link" to="signup">
              Sign up
            </NavLink>
          </li>
          <li className="nav-item nav-button">
            <NavLink className="nav-link" to="login">
              Log in
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
