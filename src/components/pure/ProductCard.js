import React from "react";

const MAX_DESCRIPTION_LENGTH = 100;
export class ProductCard extends React.PureComponent {
  render() {
    let { id, url, title, description, decrypted } = this.props;
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
        </div>

        <h4>{title}</h4>
        <p>{truncated}</p>
      </div>
    );
  }
}
