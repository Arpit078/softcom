import React from "react";
import "./Navbar.css";
import { Icon } from "@iconify/react";
import logo from "./logo.png";
function Navbar() {
  return (
    <div>
      {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="col-md-4 left">
          <a class="navbar-brand" href="/">
      <img src={logo} className="logo" alt="" width="30" height="30"/>
    </a>
            <form >
              <input className="input" placeholder="Search User"/>
              <button className="search">
                <Icon icon="bx:search-alt" color="#c29253" width="30" />
              </button>
            </form>
          </div>
          <div className="col-md-4 nav-center">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item home">
                  <a className="nav-link active" aria-current="page" href="/">
                    <Icon
                      icon="ant-design:home-filled"
                      color="#c29253"
                      width="30"
                    />
                  </a>
                </li>
                <li className="nav-item people">
                  <a className="nav-link active" aria-current="page" href="/">
                    <Icon icon="bi:people-fill" color="#c29253" width="30" />
                  </a>
                </li>
                <li className="nav-item plus">
                  <a className="nav-link active" aria-current="page" href="/">
                    <Icon
                      icon="akar-icons:circle-plus-fill"
                      color="#c29253"
                      width="30"
                    />
                  </a>
                </li>
                <li className="nav-item settings">
                  <a className="nav-link active" aria-current="page" href="/">
                    <Icon
                      icon="ci:settings-filled"
                      color="#c29253"
                      width="30"
                    />
                  </a>
                </li>
                
              </ul>
            </div>
          </div>
          <div className="col-md-4 right">
            <span className="right-text">Best Projects timeline</span>
          </div>
        </div>
      </nav> */}

      <nav className="mynavbar">
        <div class="nav-left">
                <img src={logo} className="logo" alt="" width="60" height="60" />
                <form>
                  <input className="input" placeholder="Search User" />
                </form>
                <button className="search">
                    <Icon icon="bx:search-alt" color="#c29253" width="30" />
                </button>
        </div>
        <div class="nav-mid">
                <a className="nav-link active" aria-current="page" href="/">
                  <Icon
                    icon="ant-design:home-filled"
                    color="#c29253"
                    width="30"
                  />
                </a>
                <a className="nav-link active" aria-current="page" href="/">
                  <Icon icon="bi:people-fill" color="#c29253" width="30" />
                </a>
                <a className="nav-link active" aria-current="page" href="/">
                  <Icon
                    icon="akar-icons:circle-plus-fill"
                    color="#c29253"
                    width="30"
                  />
                </a>
                <a className="nav-link active" aria-current="page" href="/">
                  <Icon
                    icon="ci:settings-filled"
                    color="#c29253"
                    width="30"
                  />
                </a>
        </div>
        <div class="nav-right">
                <p className="right-text">Best Projects Timeline</p>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
