import React from "react";
import { Link } from "react-router-dom";

export class Hero extends React.PureComponent {
  render() {
    return (
      <div className="hero">
        <div className="row">
          <div className="column">
            <h2>
              Sell Your <br /> 
              [M]isleading <br />
              [E]ncrypted <br />
              [Th]umbnails <br />
              </h2>
            <Link to={`/catalogue`} className="button large" type="a">
              Commit Bid
            </Link>
          </div>
          <div className="column">Images here </div>
        </div>
      </div>
    );
  }
}
