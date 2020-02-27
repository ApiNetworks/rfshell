export type FilterTypes = "all" | "active" | "completed";
export type SettingsPanel = true | false;

export interface BaseItem {
  label: string;
  completed: boolean;
}

export interface IStore {
  baseItems: {
    [id: string]: BaseItem;
  };

  filter: FilterTypes;
  setttingsPanel: true;
  type: any;
}
