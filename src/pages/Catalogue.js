import React from "react";
import products from "../lib/products.json";
import { Link } from "react-router-dom";

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
    	<Link to={`/product/${product.id}`}>
        <ProductCard
          id={product.id}
          url={product.thumb}
          title={product.title}
          description={product.description}
        />
        </Link>
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

}
