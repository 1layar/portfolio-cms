import { Schedule as TSchedule } from "../api/schedule/Schedule";

export const SCHEDULE_TITLE_FIELD = "sender";

export const ScheduleTitle = (record: TSchedule): string => {
  return record.sender || record.id;
};
