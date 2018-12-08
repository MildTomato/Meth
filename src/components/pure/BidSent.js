import React from "react";

export class BidSent extends React.PureComponent {
  render() {
    const { title, id } = this.props;
    return (
      <div className="row align-stretch" key={id}>
        <div className="row columns align-stretch">
          <div className="callout">
            <div className="row ">
              <div className="columns">{title}</div>
              <div className="columns">
              Some info here
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
