import React from "react";
import Styles from './style.module.css'
const Footer = () => {
  return (<div>
    <footer>
      <div className="l-warp-outer">
        <div className="l-wrap-inner">
          <div >
            <a className={Styles.social}
              href="/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-facebook"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#ffffff"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
              </svg>
            </a>

            <a className={Styles.social} href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-instagram"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#ffffff"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <rect x="4" y="4" width="16" height="16" rx="4" />
                <circle cx="12" cy="12" r="3" />
                <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
              </svg>
            </a>
            <a className={Styles.social} href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-youtube"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#ffffff"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <rect x="3" y="5" width="18" height="14" rx="4" />
                <path d="M10 9l5 3l-5 3z" />
              </svg>
            </a>
            <a className={Styles.social} href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-twitter"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#ffffff"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
              </svg>
            </a>
            <a className={Styles.social} href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-telegram"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#ffffff"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
              </svg>
            </a>
          </div>

          <ul className={Styles.list}>
            <li className={Styles.listitem}>
              <a href="/">Home</a>
            </li>
            <li className={Styles.listitem}>
              <a href="/">Blog</a>
            </li>
            <li className={Styles.listitem}>
              <a href="/">Contact</a>
            </li>
            <li className={Styles.listitem}>
              <a href="/">About</a>
            </li>
            <li className={Styles.listitem}>
              <a href="/">Login</a>
            </li>
          </ul>

          <p className="copyright">Company Name © 2023 .All rights Reserved.</p>
        </div>
      </div>
    </footer>
  </div>)

};

export default Footer;
