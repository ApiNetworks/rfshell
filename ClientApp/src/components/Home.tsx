import React from "react";
import {
  Stack,
  IStackStyles,
  IStackTokens,
  IStackItemStyles,
  IStackProps
} from "office-ui-fabric-react/lib/Stack";
import { Dispatch, bindActionCreators } from "redux";
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
  Separator,
  Panel,
  VerticalDivider
} from "office-ui-fabric-react";
import { CommandBarApi } from "./navigation/CommandBarApi";
import { IStore } from "../store";
import { IOwnProps } from "./layout/SettingsApi";
import { toggleSettings, righSidebarToggleSettings } from "../actions";
import { connect } from "react-redux";

const stackStyles: IStackStyles = {
  root: {
    background: DefaultPalette.white
  }
};

const stackRootStyles: IStackStyles = {
  root: {
    background: DefaultPalette.white,
    padding: 0,
    height: "100vh"
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

const sidebarToggleProps: IIconProps = {
  iconName: "GlobalNavButton",
  styles: { root: { padding: 10 } }
};

export interface IHomeStateProps {
  rightSidebar: boolean;
}

export interface IHomeDispatchProps {
  onRightSidebarToggle: () => void;
}

export class HomeComponent extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this._toggleSidebarApiStack = this._toggleSidebarApiStack.bind(this);
    this._toggleSidebarSettings = this._toggleSidebarSettings.bind(this);
    this.state = {
      menuItems: [],
      farMenuItems: [],
      showSidebarApiStack: true,
      showSidebarSettings: false
    };
  }
  componentDidMount() {}

  _toggleSidebarApiStack() {
    this.setState({
      showSidebarApiStack: !this.state.showSidebarApiStack
    });
  }

  _toggleSidebarSettings() {
    this.setState({
      showSidebarSettings: !this.state.showSidebarSettings
    });
  }

  render() {
    const { rightSidebar } = this.props;
    const divStyle = {
      color: "red"
    };
    return (
      <Fabric>
        <Stack styles={stackRootStyles}>
          <Stack.Item styles={stackHeaderStyles}>
            <Header applicationName="Application Manager" />
          </Stack.Item>
          <Stack.Item>
            <Stack horizontal>
              <CommandBarButton
                iconProps={sidebarToggleProps}
                title="Toggle sidebar menu on/off"
                ariaLabel="Toggle sidebar menu on/off"
                onClick={this._toggleSidebarApiStack}
              />
              <Separator vertical />
              <CommandBarApi />
            </Stack>
          </Stack.Item>
          <Stack.Item grow={2}>
            <Stack
              horizontal
              styles={stackStyles}
              tokens={innerStackTokens}
              verticalAlign="start"
            >
              {this.state.showSidebarApiStack && (
                <Stack.Item
                  align="stretch"
                  grow={1}
                  styles={sidebarMenuStackItemStyles}
                >
                  <SidebarApi />
                </Stack.Item>
              )}

              <Stack.Item
                align="stretch"
                grow={8}
                styles={contentStackItemStyles}
              >
                <Content />
              </Stack.Item>

              {rightSidebar && (
                <Stack.Item
                  align="stretch"
                  grow={1}
                  styles={sidebarMenuStackItemStyles}
                >
                  {/* <SidebarApi /> */}
                  <VerticalDivider />
                  <Content />
                </Stack.Item>
              )}
            </Stack>
          </Stack.Item>
          <Stack.Item styles={stackFooterStyles}>
            <Footer />
          </Stack.Item>
        </Stack>
      </Fabric>
    );
  }
}

function mapStateToProps(state: IStore, ownProps: IOwnProps): IHomeStateProps {
  return {
    rightSidebar: state.rightSidebar
  };
}

function mapDispatchToProps(
  dispatch: Dispatch,
  ownProps: IOwnProps
): IHomeDispatchProps {
  return {
    onRightSidebarToggle: () => {
      console.log("Called:toggleRightPanel");
      dispatch(righSidebarToggleSettings());
    }
  };
}

const Home = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
export default Home;
