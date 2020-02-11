import React from "react";
import {
  Breadcrumb,
  IBreadcrumbItem
} from "office-ui-fabric-react/lib/Breadcrumb";
import { CommandBar } from "office-ui-fabric-react/lib/CommandBar";
import { IContextualMenuItem } from "office-ui-fabric-react/lib/ContextualMenu";
import { MarqueeSelection } from "office-ui-fabric-react/lib/MarqueeSelection";
import {
  Selection,
  SelectionMode,
  SelectionZone
} from "office-ui-fabric-react/lib/utilities/selection";
import { Check } from "office-ui-fabric-react/lib/Check";
import { Fabric } from "office-ui-fabric-react/lib/Fabric";
import { Footer } from "./layout/Footer";
import "../styles/Content.css";

import {
  identity,
  createListItems,
  menuItems,
  farMenuItems
} from "../utils/utils.js";

export class Content extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      items: createListItems(200),
      selection: new Selection({
        onSelectionChanged: this._onSelectionChanged
      }),
      selectionMode: SelectionMode.multiple,
      canSelect: "all",
      menuItems: menuItems,
      farMenuItems: farMenuItems,
      breadcrumbs: [
        { text: "Files", key: "Files", onClick: identity },
        { text: "This is folder 1", key: "f1", onClick: identity },
        { text: "This is folder 2", key: "f2", onClick: identity },
        { text: "This is folder 3", key: "f3", onClick: identity },
        { text: "This is folder 4", key: "f4", onClick: identity },
        { text: "Home", key: "f5", onClick: identity }
      ]
    };
    this.state.selection.setItems(this.state.items, false);
  }

  static displayName = Content.name;

  componentDidMount() {
    this._fetchMenu();
    this._fetchBreadcrumbs();
  }

  _fetchBreadcrumbs() {
    fetch("/test/breadcrumbs")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            breadcrumbs: result
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

  _fetchMenu() {
    fetch("/test/menu")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            menuItems: result.items
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

  _onSelectionChanged = () => {
    this.forceUpdate();
  };

  render() {
    const {
      items,
      selection,
      selectionMode,
      menuItems,
      farMenuItems
    } = this.state;

    return (
      <div className="container">
        <Breadcrumb
          className="breadcrumbs"
          items={this.state.breadcrumbs}
          maxDisplayedItems={3}
        />
        <CommandBar
          items={this.state.menuItems}
          farItems={this.state.farMenuItems}
        />
        <div className="selection">
          <MarqueeSelection
            selection={selection}
            isEnabled={selectionMode === SelectionMode.multiple}
          >
            <SelectionZone
              selection={selection}
              selectionMode={selectionMode}
              onItemInvoked={item => alert(item)}
            >
              {items.map((item: any, index: any) => (
                <div
                  key={index}
                  className="selection-item"
                  data-selection-index={index}
                >
                  {selectionMode !== SelectionMode.none && (
                    <span className="check" data-selection-toggle={true}>
                      <Check checked={selection.isIndexSelected(index)} />
                    </span>
                  )}
                  <span className="name">{item.name}</span>
                </div>
              ))}
            </SelectionZone>
          </MarqueeSelection>
        </div>
        <div>{JSON.stringify(this.state.menuItems)}</div>
        <hr></hr>
        <div>{JSON.stringify(this.state.breadcrumbs)}</div>
      </div>
    );
  }
}
