import React from "react";
import { Icon } from "@iconify/react";
import LOGO from "../../assets/softcomLOGO.png";
import "./NavLeft.css";
function NavLeft() {
  return (
    <>
      <nav className="navLeft">
        <a href="/">
          <img src={LOGO} alt="" className="LOGO" />
        </a>
        <input type="text" placeholder="search" className="searchInput" />
        <button className="search">
          <Icon icon="bx:search-alt" color="#c29253" width="30" />
        </button>
      </nav>
    </>
  );
}

export default NavLeft;
