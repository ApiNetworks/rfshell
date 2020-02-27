import { IStore } from "../store";
import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

export const baseItemsReducer = createReducer<IStore["baseItems"]>(
  {},
  {
    addBaseTime(state, action) {
      // TODO: implement this reducer
    },

    remove(state, action) {
      delete state[action.id];
    },

    clear(state, action) {
      Object.keys(state).forEach(key => {
        if (state[key].completed) {
          delete state[key];
        }
      });
    },

    complete(state, action) {
      // TODO: implement this reducer
    },

    edit(state, action) {
      // TODO: implement this reducer
    }
  }
);

export const filterReducer = createReducer<IStore["filter"]>("all", {
  setFilter(state, action) {
    return action.filter;
  }
});

export const setttingsPanelReducer = createReducer<IStore["setttingsPanel"]>(
  true,
  {
    toggleSettingsPanel(state, action) {
      return action.setttingsPanel;
    }
  }
);

export const rootReducer = combineReducers({
  baseItems: baseItemsReducer,
  filter: filterReducer,
  setttingsPanel: setttingsPanelReducer
});
