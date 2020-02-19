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
import { CommandBar } from "office-ui-fabric-react";
import { CommandBarApi } from "./navigation/CommandBarApi";

const stackStyles: IStackStyles = {
  root: {
    background: DefaultPalette.white
  }
};

const stackWrapperStyles: IStackStyles = {
  root: {
    background: DefaultPalette.white,
    padding: 0
  }
};

// Styles definition
const stackHeaderStyles: IStackStyles = {
  root: {
    background: DefaultPalette.themePrimary,
    padding: 0,
    minHeight: "50px"
  }
};

const stackFooterStyles: IStackStyles = {
  root: {
    background: DefaultPalette.themePrimary,
    padding: 0,
    minHeight: "25px"
  }
};

const sidebarMenuStackItemStyles: IStackItemStyles = {
  root: {
    background: DefaultPalette.neutralLight,
    color: DefaultPalette.white,
    display: "flex",
    justifyContent: "flex-start"
  }
};

const contentStackItemStyles: IStackItemStyles = {
  root: {
    background: DefaultPalette.white,
    minHeight: "calc(100vh - 81px)"
  }
};

// Tokens definition
const outerStackTokens: IStackTokens = { childrenGap: 0 };

const innerStackTokens: IStackTokens = {
  childrenGap: 0,
  padding: 0
};

export class Home extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      menuItems: [],
      farMenuItems: []
    };
  }
  componentDidMount() {}

  render() {
    const { menuItems, farMenuItems } = this.state;
    const divStyle = {
      color: "red"
    };
    return (
      <Fabric>
        <Stack styles={stackWrapperStyles} tokens={outerStackTokens}>
          <Stack styles={stackHeaderStyles} tokens={innerStackTokens}>
            <Header applicationName="Application" />
            <CommandBarApi />
          </Stack>
          <Stack
            horizontal
            styles={stackStyles}
            tokens={innerStackTokens}
            verticalAlign="start"
          >
            <Stack.Item
              align="stretch"
              grow={1}
              styles={sidebarMenuStackItemStyles}
            >
              <SidebarMenu />
            </Stack.Item>
            <Stack.Item
              align="stretch"
              grow={8}
              styles={contentStackItemStyles}
            >
              <Content />
            </Stack.Item>
          </Stack>
          <Stack styles={stackFooterStyles} tokens={innerStackTokens}>
            <Footer />
          </Stack>
        </Stack>
      </Fabric>
    );
  }
}
