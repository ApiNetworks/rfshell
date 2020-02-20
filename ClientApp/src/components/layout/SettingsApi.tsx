import * as React from "react";
import { Panel, PanelType } from "office-ui-fabric-react/lib/Panel";
import { useConstCallback } from "@uifabric/react-hooks";
import { mergeStyles, FontIcon } from "office-ui-fabric-react";

export const SettingsApi: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const openPanel = useConstCallback(() => setIsOpen(true));
  const dismissPanel = useConstCallback(() => setIsOpen(false));
  const iconClass = mergeStyles({
    fontSize: 20,
    height: 20,
    width: 20,
    paddingRight: 20,
    cursor: "pointer",
    color: "#fff"
  });
  return (
    <div>
      <FontIcon
        iconName="ContentSettings"
        className={iconClass}
        onClick={openPanel}
      />
      <FontIcon
        iconName="AlertSettings"
        className={iconClass}
        onClick={openPanel}
      />
      <FontIcon
        iconName="PlayerSettings"
        className={iconClass}
        onClick={openPanel}
      />
      <FontIcon
        iconName="DataManagementSettings"
        className={iconClass}
        onClick={openPanel}
      />
      <FontIcon iconName="Settings" className={iconClass} onClick={openPanel} />
      <Panel
        headerText="Custom Settings"
        isOpen={isOpen}
        onDismiss={dismissPanel}
        isBlocking={true}
        // You MUST provide this prop! Otherwise screen readers will just say "button" with no label.
        closeButtonAriaLabel="Close"
      >
        <p></p>
      </Panel>
    </div>
  );
};
