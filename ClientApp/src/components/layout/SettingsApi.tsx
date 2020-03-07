import * as React from "react";
import PropTypes from "prop-types";
import { Panel } from "office-ui-fabric-react/lib/Panel";
import { useConstCallback } from "@uifabric/react-hooks";
import {
  IconButton,
  IButtonStyles,
  DefaultPalette
} from "office-ui-fabric-react";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import { IStore } from "../../store";
import { toggleSettings, toggle } from "../../actions";

import store from "../..";

const btnSettingsStyle: IButtonStyles = {
  root: {
    color: "#fff",
    backgroundColor: DefaultPalette.themePrimary
  },
  rootHovered: {
    color: "#fff",
    backgroundColor: DefaultPalette.themeSecondary
  }
};

export interface IOwnProps {
  propFromParent: boolean;
}

export interface IStateProps {
  propFromReduxStore: string;
}

export interface IDispatchProps {
  onToggleEvent: () => void;
}

export type IComponentProps = IStateProps & IDispatchProps & IOwnProps;

export interface IComponentState {
  internalComponentStateField: string;
}

// class SettingsApiComponent extends React.Component<
//   IComponentProps,
//   IComponentState
// > {
//   constructor(props: IComponentProps) {
//     super(props);
//   }

class SettingsApiComponent extends React.Component<any, any> {
  onClickToggleEvent() {
    console.log("Clicked onToggleEvent");
  }

  _togglePanel(ev: any | undefined, item?: any | undefined) {
    if (ev !== undefined) alert(ev.target);
    return false;
  }

  _onClick(ev: any | undefined, item?: any | undefined) {
    if (ev !== undefined) alert(ev.target);
    return false;
  }

  _onDismiss(ev: any | undefined, item?: any | undefined) {
    if (ev !== undefined) alert(ev.target);
    return false;
  }

  render() {
    console.log("Props:" + JSON.stringify(this.props));
    const { propFromReduxStore } = this.props;
    return (
      <span>
        <ul>
          <li onClick={this._onClick}>{propFromReduxStore}</li>
        </ul>
        <IconButton
          styles={btnSettingsStyle}
          iconProps={{ iconName: "Message" }}
          title="Toggle right panel on/off"
          onClick={this.onClickToggleEvent}
        />
        <IconButton
          styles={btnSettingsStyle}
          iconProps={{ iconName: "AlertSettings" }}
          title="Toggle right panel on/off"
          onClick={this.props.onToggleEvent}
        />
        <IconButton
          styles={btnSettingsStyle}
          iconProps={{ iconName: "PlayerSettings" }}
          title="Toggle right panel on/off"
          onClick={this._togglePanel}
        />
        <IconButton
          styles={btnSettingsStyle}
          iconProps={{ iconName: "DataManagementSettings" }}
          title="Toggle right panel on/off"
          onClick={this._togglePanel}
        />
        <IconButton
          styles={btnSettingsStyle}
          iconProps={{ iconName: "settings" }}
          title="Toggle right panel on/off"
          onClick={this._togglePanel}
        />
        <Panel
          headerText="Custom Settings"
          isOpen={false}
          onDismiss={this._onDismiss}
          isBlocking={true}
          closeButtonAriaLabel="Close" // You MUST provide this prop! Otherwise screen readers will just say "button" with no label.
        >
          <p>Settings go here...</p>
        </Panel>
      </span>
    );
  }
}

function mapStateToProps(state: IStore, ownProps: IOwnProps): IStateProps {
  return {
    //propFromReduxStore: "slkda kjaldk" //state.propFromReduxStore
    propFromReduxStore: state.propFromReduxStore
  };
}

const mapDispatchToProps2 = {
  onToggleEvent: () => toggleSettings
};

function mapDispatchToProps(
  dispatch: Dispatch,
  ownProps: IOwnProps
): IDispatchProps {
  return {
    onToggleEvent: () => {
      console.log("Called:toggleRightPanel");
      dispatch(toggleSettings());
    }
  };
}

// function mapDispatchToProps(
//   dispatch: Dispatch,
//   ownProps: IOwnProps
// ): IDispatchProps {
//   return {
//     onToggleEvent: () => {
//       console.log("Called:toggleRightPanel");
//       dispatch(toggleSettings());
//     }
//   };
// }

const SettingsApi = connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsApiComponent);
export default SettingsApi;

// export default connect<IStateProps, IDispatchProps, IOwnProps, IStore>(
//   mapStateToProps,
//   mapDispatchToProps
// )(SettingsApi);

// export default connect<
//   ISettingsApiMapState,
//   ISettingsApiMapDispatch,
//   ISettingsApiProps,
//   IStore
// >(
//   mapStateToProps,
//   mapDispatchToProps
// )(IconButton);
