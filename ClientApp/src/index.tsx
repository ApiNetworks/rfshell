import React from "react";
import ReactDOM from "react-dom";
import { mergeStyles, Fabric } from "office-ui-fabric-react";
import { initializeIcons } from "office-ui-fabric-react/lib/Icons";

import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";

import { configureStore, createStore, combineReducers } from "@reduxjs/toolkit";
import App from "./App";
import { rootReducer, initialState } from "./reducers";
import { IStore } from "./store";
import { toggle } from "./actions";

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

function basicReducer(state: IStore | undefined, action: any): IStore {
  console.log("Called basicReducer");
  console.log(JSON.stringify(action));
  // For now, don't handle any actions
  // and just return the state given to us.
  switch (action.type) {
    case toggle:
      return initialState;
    default:
      return initialState;
  }

  return initialState;
}

// todo: investigate combineReducers
const rootTempReducer = combineReducers({ basic: basicReducer });
export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: basicReducer
});

export default store;

// Log the initial state
console.log(store.getState());

// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <Fabric>
      <App />
    </Fabric>
  </Provider>,
  rootElement
);
