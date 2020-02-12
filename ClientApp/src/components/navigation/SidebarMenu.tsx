import React from "react";
import { Nav, INavLinkGroup, INavProps } from "office-ui-fabric-react/lib/Nav";

export class SidebarMenu extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      sidebarmenu: { groups: [] },
      groups: props.groups,
      expanded: props.expanded,
      collapsed: props.collapsed
    };
  }

  static defaultProps = {
    groups: [
      {
        links: [
          {
            name: "Home",
            url: "http://example.com",
            links: [
              {
                name: "Activity",
                url: "http://msn.com"
              },
              {
                name: "News",
                url: "http://msn.com"
              }
            ],
            isExpanded: true
          },
          {
            name: "Documents",
            url: "http://example.com",
            isExpanded: true
          },
          {
            name: "Pages",
            url: "http://msn.com"
          },
          {
            name: "Notebook",
            url: "http://msn.com"
          },
          {
            name: "Long Name Test for elipsis. Longer than 12em!",
            url: "http://example.com"
          },
          {
            name: "Edit Link",
            url: "http://example.com",
            iconClassName: "ms-Icon--Edit"
          },
          {
            name: "Edit",
            url: "#",
            icon: "Edit",
            onClick: () => {}
          }
        ]
      }
    ],
    expanded: "expanded",
    collapsed: "collapsed"
  };

  componentDidMount() {
    this._fetchSidebarMenu();
  }
  _fetchSidebarMenu() {
    fetch("/test/sidebarmenu")
      .then(res => res.json())
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

  render() {
    return (
      <div>
        <Nav groups={this.state.sidebarmenu.groups} />
      </div>
    );
  }
}
