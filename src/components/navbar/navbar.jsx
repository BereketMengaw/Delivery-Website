import React, { useState } from "react";
import "./navbar.css";
import { assets } from "../../assets/assets.js";

function navbar() {
  const [menu, setmenu] = useState("menu");

  return (
    <div className="navbar">
      <img src={assets.banchi} alt="" className="logo" />

      <ul className="navbar-menu">
        <li
          onClick={() => setmenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          home
        </li>
        <li
          onClick={() => setmenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </li>
        <li
          onClick={() => setmenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          mobile-app
        </li>
        <li
          onClick={() => setmenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          contact us
        </li>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-cart-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>

        <button className="sign-in">sign in</button>
      </div>
    </div>
  );
}

export default navbar;
