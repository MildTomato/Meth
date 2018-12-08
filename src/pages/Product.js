import React from "react";
import products from "../lib/products.json";
import { NotFound } from "../components/pure/NotFound.js";

export class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    const { params } = props.match;
    let { productId } = params;
    let product = products.find(x => `${x.id}` === `${productId}`) || null;
    let exists = product !== null;
    this.state = {
      id: productId,
      product,
      exists
    };
  }

  render() {
    const { product, exists } = this.state;
    if (!exists) return <NotFound />;

    const { thumb, title, description, createdAt, lastSold } = product;
    return (
      <div id="ProductPage" className="">
        <div className="row row--section">
          <div className="columns large-4">
            <div className="thumb-container">
              <img class="thumb thumb--blur" src={thumb} alt={title} width="100%"/>
            </div>
          </div>
          <div className="columns large-8">
            <h1>{title}</h1>
            <p>{description}</p>
            <p>
              <label>
                <input type="number" placeholder="ETH" />
                <button type="button" className="button">
                  Commit Bid
                </button>
              </label>
            </p>
            <p>
              <small>Created At</small>
              <br />
              {createdAt}
            </p>
            <p>
              <small>Last Sold</small>
              <br />
              {lastSold}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
