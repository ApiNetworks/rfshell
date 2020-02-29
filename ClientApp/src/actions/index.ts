import { createAction } from "@reduxjs/toolkit";

export const toggle = "settings/toggle";

export const toggleSettings = createAction(toggle, function toggle() {
  return {
    payload: {
      createdAt: new Date().toISOString()
    }
  };
});
