import React from "react";

import {
  CommandBar,
  ICommandBarStyles,
  DefaultPalette,
  ICommandBarProps,
  FontIcon,
  mergeStyles
} from "office-ui-fabric-react";

// calls api controller using route
const apiRoute = "/api/v1/commandbarapi";

// state must conform to the interface
export interface ICommandBarApi extends ICommandBarProps {
  isLoaded: boolean;
  error: any;
}

export class CommandBarApi extends React.Component<any, ICommandBarApi> {
  constructor(props: any) {
    super(props);
    this.state = {
      isLoaded: false,
      items: [],
      farItems: [],
      error: ""
    };
  }

  commandBarStyles: ICommandBarStyles = {
    root: {
      background: DefaultPalette.neutralLight,
      padding: 0
    },
    primarySet: {
      background: DefaultPalette.neutralLight
    },
    secondarySet: {
      background: DefaultPalette.neutralLight
    }
  };

  _fetchCommandBar() {
    fetch(apiRoute)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  componentDidMount() {
    this._fetchCommandBar();
  }

  render() {
    return (
      <CommandBar
        styles={this.commandBarStyles}
        items={this.state.items}
        farItems={this.state.farItems}
      ></CommandBar>
    );
  }
}
