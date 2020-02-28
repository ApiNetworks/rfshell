import React from "react";
import ReactDOM from "react-dom";
import { mergeStyles, Fabric } from "office-ui-fabric-react";
import { initializeIcons } from "office-ui-fabric-react/lib/Icons";

import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";

import { configureStore } from '@reduxjs/toolkit'
import App from "./App";
import { rootReducer } from "./reducers";

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

const store = configureStore({
   reducer: rootReducer
})

// Log the initial state
console.log(store.getState());

// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => console.log(store.getState()))

ReactDOM.render(
   <Provider store={store}>
    <Fabric>
      <App />
    </Fabric>
  </Provider>,
  rootElement
);
