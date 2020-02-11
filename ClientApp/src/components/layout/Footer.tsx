import React, { Component } from "react";
import { Link } from "office-ui-fabric-react/lib/Link";
import "../../styles/Footer.css";

export class Footer extends Component {
  static displayName = Footer.name;

  render() {
    return (
      <div className="footer-container">
        {"© Awesome App 2016. "}
        <Link href="https://github.com/guzmonne/office-ui-layout/tree/01-blank-project">
          Get in touch!
        </Link>
        {" -- Made with "}
        <span className="text-red">♥</span>
        {" by "}
        <Link href="https://github.com/guzmonne">
          Guzmán Monné {"<@guzmonne>"}
        </Link>
      </div>
    );
  }
}
