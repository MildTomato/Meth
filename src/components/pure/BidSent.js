import React from "react";

export class BidSent extends React.PureComponent {
  render() {
    const { title, id, thumb, wei } = this.props;
    let ether = (wei / (10e17)).toFixed(2)
    return (
      <div className="row align-stretch" key={id}>
        <div className="row columns align-stretch">
        <div className="columns large-12">
          <div className="callout">
            <div className="row ">
              <div className="columns"><img className="thumbnail" src={thumb} alt={title} /></div>
              <div className="columns">{title}</div>
              <div className="columns">{ether} ETH</div>
              <div className="columns">
              Some info here
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    );
  }
}
