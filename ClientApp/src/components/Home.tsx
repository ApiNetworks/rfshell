import React from "react";
import { Fabric } from "office-ui-fabric-react/lib/Fabric";
import { SidebarMenu } from "./navigation/SidebarMenu";
import { Footer } from "./layout/Footer";
import { Content } from "./Content";
import { NavBar } from "./navigation/NavBar";

export class Home extends React.Component {
  static displayName = Home.name;

  render() {
    function _alertClicked(): void {
      alert("Clicked");
    }

    return (
      <Fabric className="App">
        <div className="header">
          <NavBar />
        </div>
        <div className="body">
          <div className="content">
            <Content />
          </div>
          <div className="sidebar">
            <SidebarMenu />
          </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </Fabric>
    );
  }
}
