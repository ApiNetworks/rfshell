import * as React from "react";
import { Panel } from "office-ui-fabric-react/lib/Panel";
import { useConstCallback } from "@uifabric/react-hooks";
import {
  IconButton,
  IButtonStyles,
  DefaultPalette
} from "office-ui-fabric-react";
import { connect } from "react-redux";
import { actions } from "../../actions";
import { Dispatch, bindActionCreators } from "redux";
import { IStore } from "../../store";

export const SettingsApi: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const openPanel = useConstCallback(() => setIsOpen(true));
  const dismissPanel = useConstCallback(() => setIsOpen(false));
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

  return (
    <span>
      <IconButton
        styles={btnSettingsStyle}
        iconProps={{ iconName: "Message" }}
        title="Toggle right panel on/off"
        onClick={openPanel}
      />
      <IconButton
        styles={btnSettingsStyle}
        iconProps={{ iconName: "AlertSettings" }}
        title="Toggle right panel on/off"
        onClick={openPanel}
      />
      <IconButton
        styles={btnSettingsStyle}
        iconProps={{ iconName: "PlayerSettings" }}
        title="Toggle right panel on/off"
        onClick={openPanel}
      />
      <IconButton
        styles={btnSettingsStyle}
        iconProps={{ iconName: "DataManagementSettings" }}
        title="Toggle right panel on/off"
        onClick={openPanel}
      />
      <IconButton
        styles={btnSettingsStyle}
        iconProps={{ iconName: "settings" }}
        title="Toggle right panel on/off"
        onClick={openPanel}
      />
      <Panel
        headerText="Custom Settings"
        isOpen={isOpen}
        onDismiss={dismissPanel}
        isBlocking={true}
        closeButtonAriaLabel="Close" // You MUST provide this prop! Otherwise screen readers will just say "button" with no label.
      >
        <p>Settings go here...</p>
      </Panel>{" "}
    </span>
  );
};

// function mapStateToProps(store: IStore) {
//   return {
//     store: store
//   };
// }

// function mapDispatchToProps(dispatch: Dispatch<IStore>) {
//   return {
//     toggleSettingsPanel: bindActionCreators(
//       actions.toggleSettingsPanel,
//       dispatch
//     )
//   };
// }

// const ConnectedComponent = connect(
//   state => {},
//   dispatch => {
//     action1: () => dispatch(actions.toggleSettingsPanel());
//   }
// )(SettingsApi);
