import React from "react";
import styles from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";
import * as Constants from "../../constants";

const Navbar = () => {
  return (
    <nav>
      <ul>
        {Constants.MENU_ITEMS.map((item) => {
          return (
            <li key={item.id}>
              <NavLink
                to={item.href}
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
