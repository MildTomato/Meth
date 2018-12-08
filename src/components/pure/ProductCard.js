import React from "react";

export class ProductCard extends React.PureComponent {
  render() {
    let { url, title } = this.props
    return (
      <div className="cell small-4">
        <img className="thumbnail" src={url} alt={title} />
        <h3>{title}</h3>
      </div>
    );
  }
}
