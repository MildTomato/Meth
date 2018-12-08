import React from "react";
import data from "../lib/data.json";

import { NotFound } from "../components/pure/NotFound.js";

export class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    const { params } = props.match;
    let { productId } = params;
    let product = data.find(x => (`${x.id}` === `${productId}`)) || null;
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

    const { thumb, title, description } = product;
    return (
      <div id="ProductPage">
        <div className="media-object">
          <div className="media-object-section">
            <img src={thumb} alt={title} />
          </div>

          <div className="media-object-section">
            <h4>{title}</h4>
            <p>{description}</p>
          </div>
        </div>
      </div>
    );
  }
}
