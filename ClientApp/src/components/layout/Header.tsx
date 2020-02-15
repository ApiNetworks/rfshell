import React from "react";
import { NavigationBar } from "../navigation/NavigationBar";
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
        <Stack.Item styles={stackLogoStyles} grow={4}>
          <div>
            <h4>{this.state.applicationName}</h4>
          </div>
        </Stack.Item>
        <Stack.Item styles={stackSearchStyles} grow={1}>
          <NavigationBar />
        </Stack.Item>
      </Stack>
    );
  }
}
