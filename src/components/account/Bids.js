import React from "react";
import products from "../../lib/products.json";
import store from "../../lib/store.json";
import { Bid } from "../pure/Bid";

export class Bids extends React.Component {
  constructor(props) {
    super(props);
    let { type } = this.props;
    let { userId } = store.account;
    let user = store.users[userId];
    let bids =
      type === "SENT"
        ? store.bids.filter(x => x.sender === userId)
        : store.bids.filter(x => x.receiver === userId);
    let count = bids.length
    let title = 
    type === "SENT"
      ? `You have ${count} pending bids`
      : `You have bid on ${count} items`
    this.state = {
      bids,
      user,
      title
    };
  }
  render() {
    const { bids, title } = this.state;

    let BidList = bids.map(x => <Bid />);
    return (
      <div id="BidsSent">
        <div className="row">
          <p>{title}</p>
        </div>

        {BidList}
      </div>
    );
  }
}
