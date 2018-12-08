import React from "react";
import products from "../../lib/products.json";
import { ProductCard } from "../pure/ProductCard";

export class Popular extends React.Component {
  constructor(props) {
    super(props);
    let { limit } = this.props
    this.state = {
      products: products.slice(0, limit)
    };
  }
  render() {
    const { products } = this.state

    let ProductList = products.map(product => (
      <div className="columns small-6 medium-4 large-3" key={`product.${product.id}`}>
        <ProductCard
          id={product.id}
          url={product.thumb}
          title={product.title}
        />
      </div>
    ));
    return (
      <div className="row row--section">
      <div className="columns small-12">
        <h3 class="row--section__title">
          Most Bidded Thumbs
        </h3>
      </div>
          
        
        {ProductList}
        

      </div>
    );
  }
}
