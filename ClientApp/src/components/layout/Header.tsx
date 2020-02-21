import React from "react";
import { SearchBar } from "../navigation/SearchBar";
import { Label } from "office-ui-fabric-react/lib/Label";
import { Stack, IStackStyles, FontSizes } from "office-ui-fabric-react";
import { PanelApi } from "./PanelApi";
import { SettingsApi } from "./SettingsApi";

const stackLogoStyles: IStackStyles = {
  root: {
    verticalAlign: "center",
    alignContent: "stretch",
    minHeight: 50
  }
};

const searchStackStyles: IStackStyles = {
  root: {
    alignContent: "stretch",
    padding: 0,
    paddingRight: 20
  }
};
const settingsStackStyles: IStackStyles = {
  root: {
    alignContent: "flex-end",
    paddingRight: 20
  }
};
export interface IHeaderProps {
  applicationName: string;
}

export class Header extends React.Component<IHeaderProps, any> {
  constructor(props: IHeaderProps) {
    super(props);
    this.state = {
      applicationName: this.props.applicationName
    };
  }
  render() {
    return (
      <Stack horizontal verticalAlign="center">
        <Stack.Item>
          <PanelApi />
        </Stack.Item>
        <Stack.Item styles={stackLogoStyles} grow={1}>
          <Label
            styles={{
              root: {
                color: "#fff",
                fontSize: FontSizes.large,
                paddingTop: 12,
                paddingLeft: 20
              }
            }}
          >
            {this.state.applicationName}
          </Label>
        </Stack.Item>
        <Stack.Item styles={searchStackStyles} grow={5}>
          <SearchBar />
        </Stack.Item>
        <Stack.Item styles={settingsStackStyles}>
          <SettingsApi />
        </Stack.Item>
      </Stack>
    );
  }
}
