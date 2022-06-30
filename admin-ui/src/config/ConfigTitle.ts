import { Config as TConfig } from "../api/config/Config";

export const CONFIG_TITLE_FIELD = "id";

export const ConfigTitle = (record: TConfig): string => {
  return record.id || record.id;
};
