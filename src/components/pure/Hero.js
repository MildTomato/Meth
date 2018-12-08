import React from "react";
import { Link } from "react-router-dom";

import HeroBg from './../../background.png';
import Polaroid from './../../home-polaroid.png';

export class Hero extends React.PureComponent {
  render() {
    return (
      // <div className="hero" style={{backgroundImage: `url(${HeroBg})`, backgroundPosition: 'right', backgroundRepeat: 'no-repeat', backgroundSize: '55%'}}>
      <div className="hero">
        <div className="row">
          <div className="column small-12 large-3">
            <h2 className="text-primary">
              Sell Your <br /> 
              </h2>
          </div>
          <div className="column small-12 large-4">
          <h2 className="text-primary">
              [M]isleading <br />
              [E]ncrypted <br />
              [Th]umbnails <br />
              </h2>
          </div>
          <div className="column">
            <img src={Polaroid}/>
          </div>

          <div className="column small-12 large-12">
            <Link to={`/catalogue`} className="button large" type="a">
              <i className="fas fa-book-open" style={{marginRight: 8}}></i> Explore Thumbnails
            </Link>
            <Link to={`/catalogue`} className="button large hollow" type="a">
              <i className="fas fa-cloud-upload-alt" style={{marginRight: 8}}></i> Upload + Encrpyt
            </Link>
            <br />
            <small style={{textDecoration: "underline"}}>Learn more about image encryption</small>
          </div>
        </div>
      </div>
    );
  }
}
