import * as React from "react";
import { Stack, IStackTokens } from "office-ui-fabric-react";
import { getRTL, IRectangle } from "office-ui-fabric-react/lib/Utilities";
import {
  FocusZone,
  FocusZoneDirection
} from "office-ui-fabric-react/lib/FocusZone";
import { TextField } from "office-ui-fabric-react/lib/TextField";
import { Image, ImageFit } from "office-ui-fabric-react/lib/Image";
import { Icon } from "office-ui-fabric-react/lib/Icon";
import { List } from "office-ui-fabric-react/lib/List";
import {
  ITheme,
  mergeStyleSets,
  getTheme,
  getFocusStyle
} from "office-ui-fabric-react/lib/Styling";

import { createListItems } from "../utils/utils";

/** @internal */
export interface IExampleItem {
  thumbnail: string;
  key: string;
  name: string;
  description: string;
  color: string;
  shape: string;
  location: string;
  width: number;
  height: number;
}

/**
 * For use in this package only.
 * Partial mirror of IGroup from DetailsList avoid a circular dependency.
 * If the real interface changes and this one starts causing compiler errors, update it.
 * @internal
 */
export interface IExampleGroup {
  count: number;
  key: string;
  name: string;
  startIndex: number;
  level?: number;
  isCollapsed?: boolean;
  children?: IExampleGroup[];
}

/** @internal */
export function isGroupable(key: string): boolean {
  return key === "color" || key === "shape" || key === "location";
}

export interface IListBasicExampleProps {
  items?: IExampleItem[];
}

export interface IListBasicExampleState {
  filterText?: string;
  items?: IExampleItem[];
}

interface IListBasicExampleClassObject {
  itemCell: string;
  itemImage: string;
  itemContent: string;
  itemName: string;
  itemIndex: string;
  chevron: string;
}

const theme: ITheme = getTheme();
const { palette, semanticColors, fonts } = theme;

const listStackTokens: IStackTokens = {
  childrenGap: 1,
  padding: 10,
  maxHeight: 500
};

const styles = mergeStyleSets({
  container: {
    overflow: "auto",
    maxHeight: 500,
    marginTop: 0
  }
});

const classNames: IListBasicExampleClassObject = mergeStyleSets({
  itemCell: [
    getFocusStyle(theme, { inset: -1 }),
    {
      minHeight: 54,
      padding: 10,
      boxSizing: "border-box",
      borderBottom: `1px solid ${semanticColors.bodyDivider}`,
      display: "flex",
      selectors: {
        "&:hover": { background: palette.neutralLight }
      }
    }
  ],
  itemImage: {
    flexShrink: 0
  },
  itemContent: {
    marginLeft: 10,
    overflow: "hidden",
    flexGrow: 1
  },
  itemName: [
    fonts.xLarge,
    {
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  ],
  itemIndex: {
    fontSize: fonts.small.fontSize,
    color: palette.neutralTertiary,
    marginBottom: 10
  },
  chevron: {
    alignSelf: "center",
    marginLeft: 10,
    color: palette.neutralTertiary,
    fontSize: fonts.large.fontSize,
    flexShrink: 0
  }
});

const ROWS_PER_PAGE = 3;
const MAX_ROW_HEIGHT = 250;

export class ListAExample extends React.Component<
  IListBasicExampleProps,
  IListBasicExampleState
> {
  private _originalItems: IExampleItem[];
  private _columnCount: number = 0;
  private _columnWidth: number = 0;
  private _rowHeight: number = 0;

  constructor(props: IListBasicExampleProps) {
    super(props);

    this._originalItems = props.items || createListItems(5000);
    this.state = {
      filterText: "",
      items: this._originalItems
    };
  }

  public render(): JSX.Element {
    const { items = [] } = this.state;
    const resultCountText =
      items.length === this._originalItems.length
        ? ""
        : ` (${items.length} of ${this._originalItems.length} shown)`;

    return (
      <FocusZone direction={FocusZoneDirection.vertical}>
        <TextField
          label={"Filter by name" + resultCountText}
          onChange={this._onFilterChanged}
        />
        <Stack className={styles.container} data-is-scrollable={true}>
          <List
            items={items}
            getItemCountForPage={this._getItemCountForPage}
            getPageHeight={this._getPageHeight}
            renderedWindowsBehind={5}
            renderedWindowsAhead={10}
            onRenderCell={this._onRenderCell}
            data-is-scrollable={true}
          />
        </Stack>
      </FocusZone>
    );
  }

  private _getItemCountForPage = (
    itemIndex: number | undefined,
    surfaceRect: IRectangle | undefined
  ): number => {
    if (surfaceRect !== undefined && itemIndex === 0) {
      this._columnCount = Math.ceil(surfaceRect.width / MAX_ROW_HEIGHT);
      this._columnWidth = Math.floor(surfaceRect.width / this._columnCount);
      this._rowHeight = this._columnWidth;
    }
    //console.log(this._columnCount);
    //console.log(this._columnWidth);
    //console.log(this._rowHeight);
    return this._columnCount * ROWS_PER_PAGE;
  };

  private _getPageHeight = (): number => {
    return this._rowHeight * ROWS_PER_PAGE;
  };

  private _onFilterChanged = (_: any, text: string | undefined): void => {
    this.setState({
      filterText: text,
      items: text
        ? this._originalItems.filter(
            item => item.name.toLowerCase().indexOf(text.toLowerCase()) >= 0
          )
        : this._originalItems
    });
  };

  private _onRenderCell(
    item: IExampleItem | undefined,
    index: number | undefined
  ): JSX.Element {
    if (item !== undefined) {
      return (
        <div className={classNames.itemCell} data-is-focusable={true}>
          <Image
            className={classNames.itemImage}
            src={item.thumbnail}
            width={50}
            height={50}
            imageFit={ImageFit.cover}
          />
          <div className={classNames.itemContent}>
            <div className={classNames.itemName}>{item.name}</div>
            <div className={classNames.itemIndex}>{`Item ${index}`}</div>
            <div>{item.description}</div>
          </div>
          <Icon
            className={classNames.chevron}
            iconName={getRTL() ? "ChevronLeft" : "ChevronRight"}
          />
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}
