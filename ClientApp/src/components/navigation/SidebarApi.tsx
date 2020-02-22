import React from "react";
import {
  Nav,
  INavLinkGroup,
  INavProps,
  INavLink,
  INavStyleProps,
  INavStyles
} from "office-ui-fabric-react/lib/Nav";
import { FontSizes } from "office-ui-fabric-react";

// calls api controller using route
const apiRoute = "/api/v1/sidebarapi";

const navStyles = {
  linkText: {
    //fontSize: 20
    //paddingLeft: 25
  }
};

export class SidebarApi extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      sidebarmenu: { groups: [] },
      groups: props.groups,
      expanded: props.expanded,
      collapsed: props.collapsed
    };
  }

  componentDidMount() {
    this._fetchSidebarMenu();
  }

  _mapSidebar() {}

  _fetchSidebarMenu() {
    fetch(apiRoute)
      .then(res => res.json())
      // .then(res => {
      //   console.log(res);
      //   return res;
      // })
      .then(
        result => {
          this.setState({
            isLoaded: true,
            sidebarmenu: result
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

  _onLinkClick(
    ev: React.MouseEvent<HTMLElement> | undefined,
    item?: INavLink | undefined
  ) {
    if (ev !== undefined) alert(ev.target);
    return false;
  }

  render() {
    return (
      <Nav
        groups={this.state.sidebarmenu.groups}
        styles={{
          root: {
            minWidth: 200,
            paddingLeft: 5
          },
          linkText: {
            fontSize: 14
          }
        }}
        onLinkClick={this._onLinkClick}
      />
    );
  }
}
