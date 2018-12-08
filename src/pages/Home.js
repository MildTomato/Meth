import React from "react";
import { Link } from "react-router-dom";

import { Hero } from '../components/pure/Hero.js';

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
      </div>
    );
  }
}
