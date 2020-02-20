import React from "react";
import { SearchBox } from "office-ui-fabric-react/lib/SearchBox";
import { DefaultPalette } from "office-ui-fabric-react";

export class NavigationBar extends React.Component {
  render() {
    return (
      <SearchBox
        labelText="Search"
        styles={{ root: { backgroundColor: DefaultPalette.themeLight } }}
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
