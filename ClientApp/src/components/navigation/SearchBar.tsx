import React from "react";
import { SearchBox } from "office-ui-fabric-react/lib/SearchBox";
import { DefaultPalette } from "office-ui-fabric-react";

export class SearchBar extends React.Component {
  render() {
    return (
      <SearchBox
        placeholder="Search"
        styles={{
          root: {
            backgroundColor: DefaultPalette.themeLight,
            maxWidth: 500,
            borderWidth: 0
          }
        }}
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
