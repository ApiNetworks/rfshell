import React from "react";
import { SearchBox } from "office-ui-fabric-react/lib/SearchBox";
import "../../styles/NavBar.css";

export class NavBar extends React.Component {
  render() {
    return (
      <SearchBox
        labelText="Search"
        onChange={newValue =>
          console.log("SearchBox onChange fired: " + newValue)
        }
        onSearch={newValue =>
          console.log("SearchBox onSearch fired: " + newValue)
        }
      />
    );
  }
}
