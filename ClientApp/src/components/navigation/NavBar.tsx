import React, { Component } from "react";
import { SearchBox } from "office-ui-fabric-react/lib/SearchBox";
import "../../styles/NavBar.css";

export class NavBar extends Component {
  static displayName = NavBar.name;
  render() {
    return (
      <div className="NavBar">
        <div className="logo ms-font-xl">
          <strong>Awesome App</strong>
        </div>
        <div className="searchbox">
          <SearchBox
            labelText="Search"
            onChange={newValue =>
              console.log("SearchBox onChange fired: " + newValue)
            }
            onSearch={newValue =>
              console.log("SearchBox onSearch fired: " + newValue)
            }
          />
        </div>
      </div>
    );
  }
}
