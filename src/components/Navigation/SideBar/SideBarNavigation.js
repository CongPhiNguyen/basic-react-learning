import React from "react";
import { NavLink } from "react-router-dom";
import "./SideBarNavigation.css";
import { CSSTransition } from "react-transition-group";

export default function SideBarNavigation(props) {
  return (
    <CSSTransition
      in={props.isOpen}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <aside className="sidebar-container">
        <ul className="nav-item-container">
          <li className="close-sidebar" onClick={props.closeSidebar}>
            X
          </li>
          <li className="nav-item mobile" onClick={props.closeSidebar}>
            <NavLink className="nav-item-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item mobile" onClick={props.closeSidebar}>
            <NavLink className="nav-item-link" to="/skills">
              Skills
            </NavLink>
          </li>
          <li className="nav-item mobile" onClick={props.closeSidebar}>
            <NavLink className="nav-item-link" to="/404-not-found">
              404
            </NavLink>
          </li>
          <li className="nav-item mobile" onClick={props.closeSidebar}>
            <NavLink className="nav-item-link" to="/maps">
              Maps
            </NavLink>
          </li>
        </ul>
      </aside>
    </CSSTransition>
  );
}
