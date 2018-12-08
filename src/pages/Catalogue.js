import React from "react";
import data from "../lib/data.json";

import { ProductCard } from "../components/pure/ProductCard";

export class CataloguePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: data
    };
  }

  render() {
    const { products } = this.state;
    
    let ProductList = products.map(product => (
      <ProductCard
        id={product.id}
        key={product.id}
        url={product.thumb}
        title={product.title}
      />
    ));

    return (
      <div id="CataloguePage">
        <h1>Catalogue</h1>

        <div className="grid-x grid-margin-x">
          {ProductList}
        </div>
      </div>
    );
  }

}
