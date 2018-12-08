import React from "react";
import { Link } from "react-router-dom";

export class Hero extends React.PureComponent {
  render() {
    return (
      <div id="Hero" className="row">
          <div className="column">
            <h1>Sell your misleading thumbnails</h1>
            <Link to={`/catalogue`} className="button" type="a">
                  Commit Bid
                </Link>
          </div>
          <div className="column">Images here </div>
      </div>
    );
  }
}
