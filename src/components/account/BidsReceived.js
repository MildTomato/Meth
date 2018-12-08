import React from "react";
import products from "../../lib/products.json";
import { Bid } from "../pure/Bid";

export class BidsReceived extends React.Component {
  constructor(props) {
    super(props);
    let { limit } = this.props
    this.state = {
      products: products.slice(0, limit)
    };
  }
  render() {
    const { products } = this.state

    // let ProductList = products.map(product => (
    //   <div className="columns small-6 medium-4 " key={`product.${product.id}`}>
    //     <ProductCard
    //       id={product.id}
    //       url={product.thumb}
    //       title={product.title}
    //     />
    //   </div>
    // ));
    return (
      <div className="row">
        <p>You have bid on 2 items</p>
          
        <Bid />
        <Bid />
        <Bid />
      </div>
    );
  }
}
