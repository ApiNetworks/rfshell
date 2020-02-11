import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { mergeStyles } from "office-ui-fabric-react";
import "./styles/index.css";
import { initializeIcons } from "office-ui-fabric-react/lib/Icons";

const baseUrl = document.getElementsByTagName("base")[0].getAttribute("href")!;
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
  <BrowserRouter basename={baseUrl}>
    <App />
  </BrowserRouter>,
  rootElement
);
