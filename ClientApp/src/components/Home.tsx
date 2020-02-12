import React from "react";
import {
  Stack,
  IStackStyles,
  IStackTokens,
  IStackItemStyles,
  IStackProps
} from "office-ui-fabric-react/lib/Stack";
import { DefaultPalette } from "office-ui-fabric-react/lib/Styling";
import { Fabric } from "office-ui-fabric-react/lib/Fabric";
import { Header } from "./layout/Header";
import { Content } from "./Content";
import { SidebarMenu } from "./navigation/SidebarMenu";
import { Footer } from "./layout/Footer";

// Styles definition
const stackHeaderStyles: IStackStyles = {
  root: {
    background: DefaultPalette.blueDark,
    padding: 10
  }
};
const stackStyles: IStackStyles = {
  root: {
    background: DefaultPalette.themeTertiary
  }
};
const sidebarMenuStackItemStyles: IStackItemStyles = {
  root: {
    background: DefaultPalette.themePrimary,
    color: DefaultPalette.white,
    display: "flex",
    justifyContent: "flex-start"
  }
};
const contentStackItemStyles: IStackItemStyles = {
  root: {
    background: DefaultPalette.white
  }
};

// Tokens definition
const outerStackTokens: IStackTokens = { childrenGap: 0 };
const innerStackTokens: IStackTokens = {
  childrenGap: 0,
  padding: 0
};

export class Home extends React.Component {
  render() {
    function _alertClicked(): void {
      alert("Clicked");
    }

    return (
      <Fabric>
        <Stack tokens={outerStackTokens}>
          <Stack styles={stackHeaderStyles} tokens={innerStackTokens}>
            <Header />
          </Stack>
          <Stack
            horizontal
            styles={stackStyles}
            tokens={innerStackTokens}
            verticalAlign="start"
          >
            <Stack.Item grow styles={sidebarMenuStackItemStyles}>
              <SidebarMenu />
            </Stack.Item>
            <Stack.Item grow={8} styles={contentStackItemStyles}>
              <Content />
            </Stack.Item>
          </Stack>
          <Stack styles={stackHeaderStyles} tokens={innerStackTokens}>
            <Stack.Item>
              <Footer />
            </Stack.Item>
          </Stack>
        </Stack>
      </Fabric>
    );
  }
}
