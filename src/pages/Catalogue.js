import React from "react";
import products from "../lib/products.json";

import { ProductCard } from "../components/pure/ProductCard";

export class CataloguePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: products
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
          description={this._truncate(product.description, 100)}
        />
      </div>
    ));

    return (
      <div id="CataloguePage">
      <div className="container">
        <div className="row row--section">
          <div className="columns large-12">
            <h1>Catalogue</h1>
          </div>
        </div>

        <div className="row">
          {ProductList}
        </div>
      </div>
      </div>
    );
  }

  _truncate(string, n) {
      return (string.length > n) ? string.substr(0, n-1) + ' ...' : string;
  }

}
