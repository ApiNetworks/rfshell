import React from "react";
import { MarqueeSelection } from "office-ui-fabric-react/lib/MarqueeSelection";
import {
  Selection,
  SelectionMode,
  SelectionZone
} from "office-ui-fabric-react/lib/utilities/selection";
import { Check } from "office-ui-fabric-react/lib/Check";

import { createListItems, menuItems, farMenuItems } from "../utils/utils";

export class ListBExample extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      items: createListItems(5),
      selection: new Selection({
        onSelectionChanged: this._onSelectionChanged
      }),
      selectionMode: SelectionMode.multiple,
      canSelect: "all"
    };
    this.state.selection.setItems(this.state.items, false);
  }

  _onSelectionChanged = () => {
    this.forceUpdate();
  };

  render() {
    const {
      items,
      selection,
      selectionMode,
      breadcrumbs,
      menuItems,
      farMenuItems
    } = this.state;

    return (
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
    );
  }
}
