import React from "react";
import store from "../lib/store.json";
import products from "../lib/products.json";
import { BidReceived } from "../components/pure/BidReceived";
import { BidSent } from "../components/pure/BidSent";
import { ProductCard } from "../components/pure/ProductCard";

const VIEWS = {
  HODL: "HODL",
  SENT: "SENT",
  RECEIVED: "RECEIVED"
};
export class AccountPage extends React.Component {
  constructor(props) {
    super(props);
    let { userId } = store.account;
    let user = store.users[userId];
    let sent = store.bids.filter(x => x.sender === userId);
    let received = store.bids.filter(x => x.receiver === userId);
    let hodl = (user.hodl || []).map(x => {
      let product = products.find(p => `${p.id}` === `${x}`) || null;
      if (product === null) return null;
      return { ...product, decrypted: false };
    });
    this.state = {
      userId,
      user,
      sent,
      hodl,
      received,
      currentView: VIEWS.HODL
    };
  }

  render() {
    const { hodl, sent, received, currentView } = this.state;

    let HodlList = this._renderHodlList(hodl);
    let SentList = this._renderSentList(sent);
    let ReceivedList = this._renderReceivedList(received);

    return (
      <div id="AccountPage">
        <div className="row row--section">
          <div className="columns large-6">
            <h2>My Dashboard</h2>
          </div>
          <div className="columns large-6 text-right">
            <h3>
              <span className="text-light">Balance </span>
              <b>0.234 ETH</b>
            </h3>
          </div>
        </div>

        <div className="row">
          <div className="columns large-12">
            <div className="button-group large button-group--underline">
              <button
                onClick={() => {
                  this.setState({ currentView: VIEWS.HODL });
                }}
                className={
                  currentView === VIEWS.HODL
                    ? "button button--active"
                    : "button secondary hollow"
                }
              >
                Images you HODL
              </button>
              <button
                onClick={() => {
                  this.setState({ currentView: VIEWS.SENT });
                }}
                className={
                  currentView === VIEWS.SENT
                    ? "button button--active"
                    : "button secondary hollow"
                }
              >
                Bids Sent
              </button>
              <button
                onClick={() => {
                  this.setState({ currentView: VIEWS.RECEIVED });
                }}
                className={
                  currentView === VIEWS.RECEIVED
                    ? "button button--active"
                    : "button secondary hollow"
                }
              >
                Bids Received
              </button>

              <button className="button secondary hollow text-right">
                <i className="fas fa-cog" /> Settings
              </button>
            </div>
          </div>
        </div>

        {currentView === VIEWS.HODL && (
          <div>
            <div className="row align-stretch">
              <div className="columns large-12">
                <p>You hodl {sent.length} items.</p>
              </div>
            </div>

            <div className="row align-stretch">{HodlList}</div>
          </div>
        )}

        {currentView === VIEWS.SENT && (
          <div>
            <div className="row align-stretch">
              <div className="columns large-12">
                <p>You have sent {sent.length} bids.</p>
              </div>
              <div className="columns large-12">{SentList}</div>
            </div>
          </div>
        )}

        {currentView === VIEWS.RECEIVED && (
          <div>
            <div className="row align-stretch">
              <div className="columns large-12">
                <p>You have received {received.length} bids.</p>
              </div>
              <div className="columns large-12">{ReceivedList}</div>
            </div>
          </div>
        )}
      </div>
    );
  }

  _renderHodlList(hodl) {
    return hodl.map(product => {
      return (
        <div className="columns small-6 medium-3" key={`hodl.${product.id}`}>
          <button
            className="button expanded"
            onClick={() => this._decrypt(product.id)}
          >
            Unlock
          </button>
          <ProductCard
            id={product.id}
            url={product.thumb}
            title={product.title}
            decrypted={product.decrypted}
          />
        </div>
      );
    });
  }

  _renderReceivedList(received) {
    return received.map(bid => {
      let product =
        products.find(p => `${p.id}` === `${bid.productId}`) || null;
      if (product === null) return null;
      return (
        <BidReceived
          id={bid.id}
          title={product.title}
          key={bid.id}
          thumb={product.thumb}
          wei={bid.wei}
          onAccept={() => {
            alert("Accepted");
          }}
          onDecline={() => {
            alert("Declined");
          }}
        />
      );
    });
  }

  _renderSentList(sent) {
    return sent.map(bid => {
      let product =
        products.find(p => `${p.id}` === `${bid.productId}`) || null;
      if (product === null) return null;
      return (
        <BidSent
          id={bid.id}
          title={product.title}
          key={bid.id}
          thumb={product.thumb}
          wei={bid.wei}
        />
      );
    });
  }

  _decrypt(productId) {
    let hodl = this.state.hodl.map(x => {
      if (x.id === productId) return { ...x, decrypted: true };
      else return x;
    });
    this.setState({ hodl });
  }
}
