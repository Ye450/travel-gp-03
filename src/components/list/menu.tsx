import React from "react";
import Styles from "./style.module.css";
// import { NavLink,Outlet } from "react-router-dom";
export default function Menu() {
  return (
    <div className={Styles.menu}>
      <ul>
        <li>
          <a href="home" className={Styles.active}>
            Home
          </a>
        </li>
        <li>
          <a href="#blog">Blog</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a className={Styles.login} href="#login">Login</a>
        </li>
      </ul>
      {/* <main><Outlet/></main> */}
    </div>
  );
}
