import React from "react";
import {
  Stack,
  IStackStyles,
  IStackTokens,
  IStackItemStyles,
  IStackProps
} from "office-ui-fabric-react/lib/Stack";
import {
  DefaultPalette,
  mergeStyles
} from "office-ui-fabric-react/lib/Styling";
import { Fabric } from "office-ui-fabric-react/lib/Fabric";
import { Header } from "./layout/Header";
import { Content } from "./Content";
import { SidebarApi } from "./navigation/SidebarApi";
import { Footer } from "./layout/Footer";
import {
  CommandBar,
  FontIcon,
  Button,
  IconButton,
  IIconProps,
  CommandBarButton,
  Separator
} from "office-ui-fabric-react";
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
    padding: 0
  }
};

const stackCommandBarStyles: IStackStyles = {
  root: {
    padding: 0
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

const iconClass = mergeStyles({
  fontSize: 20,
  height: 20,
  width: 20,
  paddingLeft: 10,
  paddingRight: 20,
  cursor: "pointer"
});

const sidebarToggleProps: IIconProps = {
  iconName: "GlobalNavButton",
  styles: { root: { padding: 10 } }
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
            <Header applicationName="Application Manager" />
          </Stack>
          <Stack
            horizontal
            verticalAlign="center"
            styles={stackCommandBarStyles}
            tokens={innerStackTokens}
          >
            <CommandBarButton
              iconProps={sidebarToggleProps}
              title="Toggle sidebar menu on/off"
              ariaLabel="Toggle sidebar menu on/off"
            />
            <Separator vertical />
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
              <SidebarApi />
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
