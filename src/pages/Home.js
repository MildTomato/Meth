import React from "react";
import { Link } from "react-router-dom";

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
      <div id="HomePage">
        <Hero />
        <Popular limit="3" />
      </div>
    );
  }
}
