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
                currentView === VIEWS.HODL ? "button" : "button secondary"
              }
            >
              Images you HODL
            </button>
            <button
              onClick={() => {
                this.setState({ currentView: VIEWS.SENT });
              }}
              className={
                currentView === VIEWS.SENT ? "button" : "button secondary"
              }
            >
              Bids Sent
            </button>
            <button
              onClick={() => {
                this.setState({ currentView: VIEWS.RECEIVED });
              }}
              className={
                currentView === VIEWS.RECEIVED ? "button" : "button secondary"
              }
            >
              Bids Received
            </button>
          </div>
        </div>

        {currentView === VIEWS.HODL && (
          <div className="row">
            <Hodl />
          </div>
        )}
        {currentView === VIEWS.SENT && (
          <div className="row">
            <Bids type="SENT" />
          </div>
        )}
        {currentView === VIEWS.RECEIVED && (
          <div className="row">
            <Bids type="RECEIVED" />
          </div>
        )}
      </div>
    );
  }
}
