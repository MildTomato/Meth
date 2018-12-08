import React from "react";
import { Link } from "react-router-dom";

export class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // const { } = this.state;
    return (
      <div id="ProductPage">
        <div className="media-object">
          <div className="media-object-section">
            <img src="https://placeimg.com/200/200/people" alt="" />
          </div>

          <div className="media-object-section">
            <h4>Dreams feel real while we're in them.</h4>
            <p>
              I'm going to improvise. Listen, there's something you should know
              about me... about inception. An idea is like a virus, resilient,
              highly contagious. The smallest seed of an idea can grow. It can
              grow to define or destroy you.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
