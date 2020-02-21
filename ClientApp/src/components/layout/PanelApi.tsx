import * as React from "react";
import { Panel, PanelType } from "office-ui-fabric-react/lib/Panel";
import { useConstCallback } from "@uifabric/react-hooks";
import {
  IconButton,
  IIconProps,
  IButtonStyles,
  DefaultPalette
} from "office-ui-fabric-react";

const leftPanelToggleProps: IIconProps = {
  iconName: "Waffle",
  styles: {
    root: { color: "#fff" }
  }
};

export const PanelApi: React.FunctionComponent = () => {
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
    <div>
      <IconButton
        styles={btnSettingsStyle}
        iconProps={{ iconName: "Waffle" }}
        title="Toggle sidebar menu on/off"
        ariaLabel="Toggle sidebar menu on/off"
        onClick={openPanel}
      />

      <Panel
        type={PanelType.smallFixedNear}
        headerText="Available Modules"
        isOpen={isOpen}
        onDismiss={dismissPanel}
        isBlocking={true}
        closeButtonAriaLabel="Close" // You MUST provide this prop! Otherwise screen readers will just say "button" with no label.
      >
        <p></p>
      </Panel>
    </div>
  );
};
