import React from "react";
import {
  Stack,
  IStackTokens,
  Text,
  Link,
  FontWeights,
  DefaultButton,
  PrimaryButton,
  ScrollablePane
} from "office-ui-fabric-react";

export class About extends React.Component {
  static displayName = About.name;

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
