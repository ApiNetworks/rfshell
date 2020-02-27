import React from "react";
import ReactDOM from "react-dom";
import { mergeStyles, Fabric } from "office-ui-fabric-react";
import { initializeIcons } from "office-ui-fabric-react/lib/Icons";

import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";

import App from "./App";
import { rootReducer } from "./reducers";
import { createStore } from "redux";
import { actions } from "./actions";

const rootElement = document.getElementById("root") as HTMLElement;

initializeIcons(/* optional base url */);

// Inject some global styles
mergeStyles({
  selectors: {
    ":global(body), :global(html), :global(#app)": {
      margin: 0,
      padding: 0,
      height: "100vh"
    }
  }
});

const storeObj = createStore(rootReducer);

storeObj.dispatch(actions.toggleSettingsPanel());

ReactDOM.render(
  <Provider store={storeObj}>
    <Fabric>
      <App />
    </Fabric>
  </Provider>,
  rootElement
);
