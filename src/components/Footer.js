import React from "react";
import { Link } from "react-router-dom";

export class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="row">
          <div className="columns small-6">TITLE</div>
          <div className="columns small-2">
            <ul>
              <li>Terms</li>
              <li>Privacy</li>
            </ul>
          </div>
          <div className="columns small-2">
            <ul>
              <li>
                <Link to={`/catalogue`} className="">
                  Catalogue
                </Link>
              </li>
              <li>Search</li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}
