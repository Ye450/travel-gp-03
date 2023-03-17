import React from "react";
import Styles from "./style.module.css";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className={Styles.menu}>
      <ul>
        <li>
          <Link to="/" className={Styles.active}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link className={Styles.login} to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
}
