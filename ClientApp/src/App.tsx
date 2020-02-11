import React, { Component } from "react";
import { Route } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { About } from "./components/About";
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

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Layout>
    );
  }
}
