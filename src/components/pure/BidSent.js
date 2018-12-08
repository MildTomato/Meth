import React from "react";

export class BidSent extends React.PureComponent {
  render() {
    const { title, id, thumb, wei } = this.props;
    let ether = (wei / (10e17)).toFixed(2)
    return (
      <div key={id}>
        {/*<div className="row columns align-stretch">*/}
        
          
            <div className="row row--acount-item">
              <div className="column shrink align-self-middle"><img src={thumb} alt={title} width="96" height="96"/></div>
              <div className="column align-self-middle">
                <b class="text-primary">{title}</b>
                <p>Description can go here</p>
              </div>
              <div className="column align-self-middle"><h3 className="text-primary"><i class="fab fa-ethereum" style={{marginRight: 16}}></i>{ether} ETH</h3></div>
              <div className="column shrink align-self-middle"><h5>Waiting For Response</h5></div>
              <div className="column shrink align-self-middle text-right">
                <h5 className="text-primary">
                <i className="far fa-clock" style={{marginRight: 16}}></i>
                  <span className="h4">12</span>h
                  <span className="h4">12</span>m
                  <span className="h4">12</span>s
                </h5>
              </div>
            </div>
          
        
      </div>
    );
  }
}
