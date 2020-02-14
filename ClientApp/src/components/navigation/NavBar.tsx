import React from "react";
import { SearchBox } from "office-ui-fabric-react/lib/SearchBox";
import { Stack, IStackStyles } from "office-ui-fabric-react";

const stackLogoStyles: IStackStyles = {
  root: {
    verticalAlign: "center",
    alignContent: "stretch"
  }
};

const stackSearchStyles: IStackStyles = {
  root: {
    verticalAlign: "center",
    alignContent: "stretch",
    padding: 5
  }
};

export class NavBar extends React.Component {
  render() {
    return (
      <Stack horizontal verticalAlign="center">
        <Stack.Item styles={stackLogoStyles} grow={4}>
          <div>
            <h4>App</h4>
          </div>
        </Stack.Item>
        <Stack.Item styles={stackSearchStyles} grow={1}>
          <SearchBox
            labelText="Search"
            onChange={newValue =>
              console.log("SearchBox onChange fired: " + newValue)
            }
            onSearch={newValue =>
              console.log("SearchBox onSearch fired: " + newValue)
            }
          />
        </Stack.Item>
      </Stack>
    );
  }
}
