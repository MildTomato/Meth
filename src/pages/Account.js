import React from "react";
import { Bids } from "../components/account/Bids.js";
import { Hodl } from "../components/account/Hodl.js";

const VIEWS = {
  HODL: "HODL",
  SENT: "SENT",
  RECEIVED: "RECEIVED"
};
export class AccountPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: VIEWS.HODL
    };
  }

  render() {
    const { currentView } = this.state;
    return (
      <div id="AccountPage">
        <div className="row">
          <h2>My Dashboard</h2>
        </div>

        <div className="row">
          <div className="small button-group">
            <button
              onClick={() => {
                this.setState({ currentView: VIEWS.HODL });
              }}
              className={
                currentView === VIEWS.HODL ? "button" : "button secondary hollow"
              }
            >
              Images you HODL
            </button>
            <button
              onClick={() => {
                this.setState({ currentView: VIEWS.SENT });
              }}
              className={
                currentView === VIEWS.SENT ? "button" : "button secondary hollow"
              }
            >
              Bids Sent
            </button>
            <button
              onClick={() => {
                this.setState({ currentView: VIEWS.RECEIVED });
              }}
              className={
                currentView === VIEWS.RECEIVED ? "button" : "button secondary hollow"
              }
            >
              Bids Received
            </button>
          </div>
        </div>

        {currentView === VIEWS.HODL && (
            <Hodl />
        )}
        {currentView === VIEWS.SENT && (
            <Bids type="SENT" />
        )}
        {currentView === VIEWS.RECEIVED && (
            <Bids type="RECEIVED" />
        )}
      </div>
    );
  }
}
