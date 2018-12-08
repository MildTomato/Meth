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
      <div className="columns small-6 medium-4 " key={`product.${product.id}`}>
        <ProductCard
          id={product.id}
          url={product.thumb}
          title={product.title}
        />
      </div>
    ));

    return (
      <div id="CataloguePage">
      <div className="container">
        <div className="row">
          <h1>Catalogue</h1>
        </div>

        <div className="row">
          {ProductList}
        </div>
      </div>
      </div>
    );
  }

}
