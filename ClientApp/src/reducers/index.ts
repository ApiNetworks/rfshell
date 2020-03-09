import { IStore } from "../store";
import { combineReducers } from "redux";
import { createReducer, createAction } from "@reduxjs/toolkit";
import { toggle, righSidebarToggle } from "../actions";

export const initialState: IStore = {
  settingsPanel: false,
  propFromReduxStore: "Initial Global Value1",
  rightSidebar: false
};

export const propFromReduxStore = createReducer(
  initialState.propFromReduxStore,
  {
    [toggle]: (state, action) => {
      const { createdAt } = action.payload;
      return (
        " From Action:" +
        toggle +
        " => " +
        createdAt +
        " " +
        JSON.stringify(action.payload)
      );
    }
  }
);

export const settingsPanel = createReducer(initialState.settingsPanel, {
  [toggle]: (state, action) => {
    JSON.stringify(state);
    return !state;
  }
});

export const rightSidebar = createReducer(initialState.rightSidebar, {
  [righSidebarToggle]: (state, action) => {
    console.log("Reducer:rightSidebar " + JSON.stringify(state));
    return !state;
  }
});

export const rootReducer = combineReducers({
  propFromReduxStore,
  settingsPanel,
  rightSidebar
});

export type RootState = ReturnType<typeof rootReducer>;
