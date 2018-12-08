import React from "react";
import products from "../lib/products.json";
import { NotFound } from "../components/pure/NotFound.js";
import Web3 from 'web3';

export class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    const { params } = props.match;
    let { productId } = params;
    let product = products.find(x => `${x.id}` === `${productId}`) || null;
    let exists = product !== null;
    this.state = {
      id: productId,
      product,
      exists
    };
  }

  buy(){
    window.web3.eth.sendTransaction({
                from: window.web3.eth.coinbase,
                to: '0xE767aEB31dAAF66366999F72FB5De2CEEA76c277',
                value: window.web3.toWei(3, 'ether')
            }, function(res){console.log(res)});
  };

  render() {
    const { product, exists } = this.state;
    if (!exists) return <NotFound />;

    const { thumb, title, description, createdAt, lastSold } = product;
    return (
      <div id="ProductPage" className="">
        <div className="row row--section">
          <div className="columns large-4">
            <div className="thumb-container">
              <img className="thumb thumb--blur" src={thumb} alt={title} width="100%"/>
            </div>
          </div>
          <div className="columns large-8">

            <h1>{title}</h1>
            <p>{description}</p>

            <div className="row collapse">
              <div className="large-6 columns">
                <div className="input-group">
                  <span className="input-group-label"><i className="fab fa-ethereum" style={{marginRight: 16}}></i>ETH</span>
                  <input className="input-group-field" type="number"/>
                  <div className="input-group-button">
                    <button onClick={()=>{this.buy()}} className="button">Commit Bid</button>
                  </div>
                </div>
              </div>
            </div>

            <p>
              <small>Created At</small>
              <br />
              {createdAt}
            </p>
            <p>
              <small>Last Sold</small>
              <br />
              {lastSold}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
