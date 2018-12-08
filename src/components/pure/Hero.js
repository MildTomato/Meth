import React from "react";
import { Link } from "react-router-dom";

import HeroBg from './../../background.png';

export class Hero extends React.PureComponent {
  render() {
    return (
      <div className="hero" style={{backgroundImage: `url(${HeroBg})`, backgroundPosition: 'right', backgroundRepeat: 'no-repeat', backgroundSize: '55%'}}>
        <div className="row">
          <div className="column">
            <h1 className="text-primary">
              Sell Your <br /> 
              [M]isleading <br />
              [E]ncrypted <br />
              [Th]umbnails <br />
              </h1>
            <Link to={`/catalogue`} className="button large" type="a">
              Explore Thumbnails
            </Link>
          </div>
          <div className="column">Images here </div>
        </div>
      </div>
    );
  }
}
