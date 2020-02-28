import { createAction } from "@reduxjs/toolkit"

export const toggle = 'settings/toggle';

export const toggleSettings = createAction(toggle, function toggle(settings) {
   return {
      payload: {
         settingsPanel: !settings,
         createdAt: new Date().toISOString()
      }
   }
})