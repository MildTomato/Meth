import React from "react";
import products from "../../lib/products.json";
import { Bid } from "../pure/Bid";

export class BidsSent extends React.Component {
  constructor(props) {
    super(props);
    let { limit } = this.props;
    this.state = {
      products: products.slice(0, limit)
    };
  }
  render() {
    const { products } = this.state;

    return (
      <div id="BidsSent">
        <div className="row">
          <p>You have 3 pending bids</p>
        </div>

          <Bid />
          <Bid />
          <Bid />
      </div>
    );
  }
}
