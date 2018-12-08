import React from "react";
import { Link } from "react-router-dom";

export class Footer extends React.Component {
  render() {
    
    return (
      <footer className="footer">
          <div className="grid-container">
            <div className="grid-x">
              <div className="cell small-6">Footer</div>
              <div className="cell small-6">
              Links
              <br />
              <Link to={`/product`} className="">Product</Link>
              </div>
            </div>
          </div>
      </footer>
    );
  }
}
