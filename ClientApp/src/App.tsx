import React from "react";
import { Route } from "react-router";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { BrowserRouter } from "react-router-dom";

const baseUrl = document.getElementsByTagName("base")[0].getAttribute("href")!;

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter basename={baseUrl}>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </BrowserRouter>
    );
  }
}
