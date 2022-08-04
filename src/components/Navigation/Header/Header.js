import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

function Header(props) {
  // console.log(props);
  return (
    <header className="header-container">
      <ul className="nav-container">
        <li>
          <FaBars
            className="header-icon mobile"
            size={24}
            onClick={props.openSidebar}
          />
        </li>
        <li>
          <NavLink to="/">
            <img
              className="nav-item-img"
              alt="Ju Jing Yi"
              src="https://i.pinimg.com/564x/7d/5a/ac/7d5aacf9e1bf166ed96c6a8913854063.jpg"
            />
          </NavLink>
        </li>

        <li className="desktop">
          <NavLink className="nav-item" to="/">
            Home
          </NavLink>
        </li>
        <li className="desktop">
          <NavLink className="nav-item" to="/skills">
            Skills
          </NavLink>
        </li>
        <li className="desktop">
          <NavLink className="nav-item" to="/404-not-found">
            404
          </NavLink>
        </li>
        <li className="desktop">
          <NavLink className="nav-item" to="/maps">
            Maps
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-item" to="/login">
            Login
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
