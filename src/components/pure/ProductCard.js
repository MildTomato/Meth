import React from "react";

import pixel from "./../../pixel.gif";

const MAX_DESCRIPTION_LENGTH = 100;
export class ProductCard extends React.PureComponent {
  render() {
    let { id, url, title, description, decrypted, isLoading } = this.props;
    let truncated = !description
      ? null
      : description.length > MAX_DESCRIPTION_LENGTH
      ? description.substr(0, MAX_DESCRIPTION_LENGTH - 1) + " ..."
      : description;


    return (
      <div className={"product-card"}>
        <div className="thumb-container">
          <img
            className={decrypted ? "product-card__thumbnail thumb" : "product-card__thumbnail thumb thumb--blur"}
            src={url}
            alt={title}
          />

          <div class="spinner">
            <div class="cube1"></div>
            <div class="cube2"></div>
          </div>
        </div>

        { isLoading ? (
          <h1>I AM DECRYPTING</h1>
        )
        : null}

        <p style={{marginTop: 16}}>{title}</p>
        <small>{truncated}</small>
      </div>
    );
  }
}
