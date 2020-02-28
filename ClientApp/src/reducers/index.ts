import { IStore } from "../store";
import { Reducer, combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { toggleSettings, toggle } from "../actions"

const initialState: IStore = {
   settingsPanel : true
}

export const settingsPanelReducer = createReducer(0, {
   [toggle]: (state, action) => state + action.payload,
})

export const rootReducer = combineReducers({
   settingsPanel: settingsPanelReducer
});
