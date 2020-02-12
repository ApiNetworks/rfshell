import React from "react";
import { PrimaryButton } from "office-ui-fabric-react";

export class About extends React.Component {
  render() {
    function _alertClicked(): void {
      alert("Clicked");
    }

    return (
      <div>
        <h1>About</h1>
        <p>Welcome to your new single-page application, built with:</p>
        <PrimaryButton text="About Button" onClick={_alertClicked} />
      </div>
    );
  }
}
