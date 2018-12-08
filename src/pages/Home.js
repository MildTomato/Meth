import React from "react";

import { Hero } from '../components/pure/Hero.js';
import { Popular } from '../components/containers/Popular.js';

export class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  
  render() {
    // const { } = this.state;
    return (
      <div id="HomePage" className="home">
        <Hero />
        <div className="row">
          <Popular limit="4" />
        </div>
      </div>
    );
  }
}
