import React from "react";
import { Link } from "react-router-dom";

export class NavBar extends React.Component {
  render() {
    
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="dropdown menu" data-dropdown-menu>
            <li><Link to={`/`} className="">Site Title</Link></li>
            <li><a href="#">Metamask Status</a></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li><Link to={`/catalogue`} className="">Catalogue</Link></li>
            <li><input type="search" placeholder="Search" /></li>
            <li><button type="button" className="button">Search</button></li>
            <li><Link to={`/account`} className="">Account</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}
