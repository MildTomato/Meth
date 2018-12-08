import React from "react";

export class BidReceived extends React.PureComponent {
  render() {
    const { title, thumb, wei, onAccept, onDecline } = this.props;
    let ether = (wei / (10e17)).toFixed(2)
    return (
      
        <div className="row align-justify row--acount-item">
          <div className="column shrink align-self-middle"><img src={thumb} alt={title} width="96" height="96"/></div>
          <div className="column align-self-middle">
            <b className="text-dark">{title}</b>
            <p>Description can go here</p>
          </div>
          <div className="column shrink align-self-middle text-right">
            <p className="text-dark">
            <i className="far fa-clock" style={{marginRight: 16}}></i>
              <span className="h5">12</span>h
              <span className="h5">12</span>m
              <span className="h5">12</span>s
            </p>
          </div>
          <div className="column shrink text-right">
            <h5 className="text-dark"><i className="fab fa-ethereum" style={{marginRight: 16}}></i>{ether} ETH</h5>
          </div>
          <div className="column shrink large-4 text-right">
            <div className="button-group">
              <button className="button hvr-icon-grow" onClick={onAccept}><i className="far fa-check-circle hvr-icon" style={{marginRight: 8}}></i> Accept Bid</button>
              <button className="button alert hvr-icon-grow" onClick={onDecline}><i className="far fa-times-circle hvr-icon"></i></button>
            </div>
          </div>
        </div>
      
    );
  }
}
