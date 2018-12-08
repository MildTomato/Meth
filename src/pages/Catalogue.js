import React from "react";

import { ProductCard } from "../components/pure/ProductCard.js";

export class CataloguePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // const { } = this.state;
    return (
      <div id="CataloguePage">
        <h1>Catalogue</h1>

        <div className="grid-x grid-margin-x">
          <ProductCard
            url="https://placeimg.com/200/200/people"
            title="Misleading 1"
          />
          <ProductCard
            url="https://placeimg.com/200/200/people"
            title="Misleading 2"
          />
          <ProductCard
            url="https://placeimg.com/200/200/people"
            title="Misleading 3"
          />
        </div>
      </div>
    );
  }
}
