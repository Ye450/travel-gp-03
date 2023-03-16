import React from "react";
import Styles from "./style.module.css";
export default function Logo() {
  return (
    <div className={Styles.navlogo}>
      <div className={Styles.logoinner}>AA</div>
      <span className={Styles.logonxt}>
        Austin's <br /> Atlaus
      </span>
    </div>
  );
}
