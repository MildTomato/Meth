import React from "react";

export class Bid extends React.PureComponent {
  render() {
    return (
      <div class="row align-stretch">
        <div class="row columns align-stretch">
          <div class="callout">
            <div class="row ">
              <div class="columns">These colums have the same height.</div>
              <div class="columns">These colums have the same height.</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
