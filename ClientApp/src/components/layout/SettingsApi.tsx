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
import {
  toggleSettings,
  toggle,
  righSidebarToggle,
  righSidebarToggleSettings
} from "../../actions";

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
  settingsPanel: boolean;
}

export interface IDispatchProps {
  onToggleEvent: () => void;
  onRightBarToggle: () => void;
}

export type IComponentProps = IStateProps & IDispatchProps & IOwnProps;

export interface IComponentState {
  internalComponentStateField: string;
}

class SettingsApiComponent extends React.Component<
  IComponentProps,
  IComponentState
> {
  constructor(props: IComponentProps) {
    super(props);
  }

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
    const { propFromReduxStore, settingsPanel } = this.props;
    return (
      <span>
        <ul>
          <li onClick={this._onClick}>{propFromReduxStore}</li>
          <li onClick={this._onClick}>{settingsPanel}</li>
        </ul>
        <IconButton
          styles={btnSettingsStyle}
          iconProps={{ iconName: "Message" }}
          title="Toggle right panel on/off"
          onClick={this.props.onRightBarToggle}
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
          isOpen={settingsPanel}
          onDismiss={this.props.onToggleEvent}
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
    propFromReduxStore: state.propFromReduxStore,
    settingsPanel: state.settingsPanel
  };
}

function mapDispatchToProps(
  dispatch: Dispatch,
  ownProps: IOwnProps
): IDispatchProps {
  return {
    onToggleEvent: () => {
      console.log("Called:toggleRightPanel");
      dispatch(toggleSettings());
    },
    onRightBarToggle: () => {
      console.log("Called:righSidebarToggleSettings");
      dispatch(righSidebarToggleSettings());
    }
  };
}

const SettingsApi = connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsApiComponent);
export default SettingsApi;
