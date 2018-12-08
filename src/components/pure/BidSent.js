import React from "react";

export class BidSent extends React.PureComponent {
  render() {
    const { title, id, thumb, wei } = this.props;
    let ether = (wei / (10e17)).toFixed(2)
    return (
 
        <div className="row row--acount-item" key={id}>
          <div className="column shrink align-self-middle"><img src={thumb} alt={title} width="96" height="96"/></div>
          <div className="column align-self-middle">
            <b class="text-primary">{title}</b>
            <p>Description can go here</p>
          </div>
          <div className="column shrink align-self-middle"><h5 className="text-primary"><i class="fab fa-ethereum" style={{marginRight: 16}}></i>{ether} ETH</h5></div>
          <div className="column shrink align-self-middle"><p>Waiting For Response</p></div>
          <div className="column shrink align-self-middle text-right">
            <p className="text-primary">
            <i className="far fa-clock" style={{marginRight: 16}}></i>
              <span className="h5">12</span>h
              <span className="h5">12</span>m
              <span className="h5">12</span>s
            </p>
          </div>
        </div>
    );
  }
}
