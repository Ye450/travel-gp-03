import React from "react";
import Styles from "./style.module.css";
export default function Mvisual() {
  return(
    <div className={Styles.txt}>
    <h1 >
      Let me show you <br />
      the world
    </h1>
    <div className={Styles.search}>
      <h2 >Where do you want to explore?</h2>
      <div className={Styles.box}>
        <div>
          <input type="text" name="" id="text" placeholder="Search......." />
          <button>GO</button>
        </div>
      </div>
    </div>
  </div>
  );
}
