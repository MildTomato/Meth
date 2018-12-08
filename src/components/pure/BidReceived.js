import React from "react";

export class BidReceived extends React.PureComponent {
  render() {
    const { title, thumb, wei, onAccept, onDecline } = this.props;
    let ether = (wei / (10e17)).toFixed(2)
    return (
      <div>
        <div className="row align-justify row--acount-item">
          <div className="column shrink align-self-middle"><img src={thumb} alt={title} width="96" height="96"/></div>
          <div className="column align-self-middle">
            <b className="text-primary">{title}</b>
            <p>Description can go here</p>
          </div>
          <div className="column align-self-middle text-right">
            <h5 className="text-primary">
            <i className="far fa-clock" style={{marginRight: 16}}></i>
              <span className="h4">12</span>h
              <span className="h4">12</span>m
              <span className="h4">12</span>s
            </h5>
          </div>
          <div className="column align-self-middle"><h3 className="text-primary"><i className="fab fa-ethereum" style={{marginRight: 16}}></i>{ether} ETH</h3></div>
          <div className="column large-4 text-right">
            <div className="button-group large">
              <button className="button primary hvr-icon-grow" onClick={onAccept}><i className="far fa-check-circle hvr-icon"></i> Accept Bid</button>
              <button className="button alert hvr-icon-grow" onClick={onDecline}><i className="far fa-times-circle hvr-icon"></i></button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
