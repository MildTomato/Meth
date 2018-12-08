import React from "react";
import { Link } from "react-router-dom";

import logo from "./../logo.png";

export class NavBar extends React.Component {
  render() {
    return (
      <div id="NavBar" className="top-bar row">
        <div className="top-bar-left">
          <ul className="dropdown menu" data-dropdown-menu>
            <li className="top-bar__logo">
              <Link to={`/`} className="">
                <img src={logo} width="96" alt="METH"/>
              </Link>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-circle text-success" style={{marginLeft: 16, marginRight: 8}}/> Network Status: Go Moon
              </a>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li>
              <Link to={`/catalogue`} className="">
                <i className="fas fa-book-open" style={{marginRight: 8}}/> Catalogue
              </Link>
            </li>
            <li>
              <Link to={`/catalogue`} className="">
                <i className="fas fa-search" style={{marginRight: 8}}/> Search
              </Link>
            </li>
            <li>
              <Link to={`/account`} className="">
                <i className="far fa-user-circle" style={{marginRight: 8}}/> Account
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
