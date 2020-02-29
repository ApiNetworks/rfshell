import { IStore } from "../store";
import { combineReducers } from "redux";
import { createReducer, createAction } from "@reduxjs/toolkit";
import { toggle } from "../actions";

const initialState: IStore = {
  settingsPanel: true
};

export const settingsPanelReducer = createReducer(initialState, {
  [toggle]: (state, action) => state + action.payload
});

export const rootReducer = combineReducers({
  settingsPanel: settingsPanelReducer
});
