import React from "react";
import data from "../../lib/data.json";
import { ProductCard } from "../pure/ProductCard";

export class Popular extends React.Component {
  constructor(props) {
    super(props);
    let { limit } = this.props
    this.state = {
      products: data.slice(0, limit)
    };
  }
  render() {
    const { products } = this.state

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
      <div className="row">
        <h3>Most Bidded Thumbs</h3>
          
        <div className="row">
          {ProductList}
        </div>

      </div>
    );
  }
}
