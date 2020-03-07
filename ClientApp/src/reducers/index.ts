import { IStore } from "../store";
import { combineReducers } from "redux";
import { createReducer, createAction } from "@reduxjs/toolkit";
import { toggle } from "../actions";

export const initialState: IStore = {
  settingsPanel: true,
  propFromReduxStore: "Initial Global Value1"
};

export const settingsPanelReducer = createReducer(initialState, {
  [toggle]: (state, action) => state + action.payload
});

export const rootReducer = combineReducers({
  settingsPanel: settingsPanelReducer
});
