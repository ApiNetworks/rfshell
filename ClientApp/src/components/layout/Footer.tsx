import React from "react";
import { Link } from "office-ui-fabric-react/lib/Link";

export class Footer extends React.Component {
  render() {
    return (
      <div>
        {"© React Fabric Shell 2020. "}
        <Link href="https://github.com/guzmonne/office-ui-layout/tree/01-blank-project">
          Get in touch!
        </Link>
      </div>
    );
  }
}
