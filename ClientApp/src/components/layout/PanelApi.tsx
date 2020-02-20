import * as React from "react";
import { Panel, PanelType } from "office-ui-fabric-react/lib/Panel";
import { useConstCallback } from "@uifabric/react-hooks";
import { mergeStyles, FontIcon } from "office-ui-fabric-react";

export const PanelApi: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const openPanel = useConstCallback(() => setIsOpen(true));
  const dismissPanel = useConstCallback(() => setIsOpen(false));
  const iconClass = mergeStyles({
    fontSize: 24,
    height: 24,
    width: 24,
    paddingLeft: 10,
    paddingRight: 20,
    cursor: "pointer",
    color: "#fff"
  });
  return (
    <div>
      <FontIcon iconName="Waffle" className={iconClass} onClick={openPanel} />
      <Panel
        type={PanelType.smallFixedNear}
        headerText="Available Modules"
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
