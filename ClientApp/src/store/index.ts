export type FilterTypes = "all" | "active" | "completed";
export type SettingsPanel = true | false;

export interface BaseItem {
  label: string;
  completed: boolean;
}

export interface IStore {
  settingsPanel: boolean;
  rightSidebar: boolean;
  propFromReduxStore: string;
}
