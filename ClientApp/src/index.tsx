import React from "react";
import ReactDOM from "react-dom";
import { mergeStyles, Fabric } from "office-ui-fabric-react";
import { initializeIcons } from "office-ui-fabric-react/lib/Icons";
import App from "./App";
//import "./styles/index.css";

const rootElement = document.getElementById("root");

initializeIcons(/* optional base url */);

// Inject some global styles
mergeStyles({
  selectors: {
    ":global(body), :global(html), :global(#app)": {
      margin: 0,
      padding: 0,
      height: "100vh"
    }
  }
});

ReactDOM.render(
  <Fabric>
    <App />
  </Fabric>,
  rootElement
);
