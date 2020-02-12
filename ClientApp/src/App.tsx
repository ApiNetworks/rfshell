import React from "react";
import { Route } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { About } from "./components/About";

export default class App extends React.Component {
  render() {
    return (
      <Layout>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Layout>
    );
  }
}
