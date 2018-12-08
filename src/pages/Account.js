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
    this.state = {
      userId,
      user,
      sent,
      received,
      currentView: VIEWS.HODL
    };
  }

  render() {
    const { userId, user, sent, received, currentView } = this.state;

    let hodl = user.hodl || []
    let HodlList = hodl.map(x => {
      let product =
        products.find(p => `${p.id}` === `${x.productId}`) || null;
      if (product === null) return null;
      return (
        <div className="columns large-4">
        <ProductCard
          id={product.id}
          url={product.thumb}
          title={product.title}
        />
        </div>
      );
    });

    let SentList = sent.map(bid => {
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

    let ReceivedList = received.map(bid => {
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

    return (
      <div id="AccountPage">
        <div className="row row--section">
          <div className="columns large-6">
            <h2>My Dashboard</h2>
          </div>
          <div className="columns large-6 text-right">
            <h3>Balance <b>0.234 ETH</b></h3>
          </div>
        </div>

        <div className="row">
          <div className="columns large-12">
            <div className="small button-group">
              <button
                onClick={() => {
                  this.setState({ currentView: VIEWS.HODL });
                }}
                className={
                  currentView === VIEWS.HODL
                    ? "button"
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
                    ? "button"
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
                    ? "button"
                    : "button secondary hollow"
                }
              >
                Bids Received
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
              <div className="columns large-12">

            <div className="row align-stretch">
                {HodlList}
              </div>
              </div>
            </div>
          </div>
        )}

        {currentView === VIEWS.SENT && (
          <div>
            <div className="row align-stretch">
              <div className="columns large-12">
                <p>You have sent {sent.length} bids.</p>
              </div>
              <div className="columns large-12">
                {SentList}
              </div>
            </div>
          </div>
        )}

        {currentView === VIEWS.RECEIVED && (
          <div>
            <div className="row align-stretch">
              <div className="columns large-12">
                <p>You have received {received.length} bids.</p>
              </div>
              <div className="columns large-12">
                {ReceivedList}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
