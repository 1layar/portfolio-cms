import { SortOrder } from "../../util/SortOrder";

export type ScheduleOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  meetAt?: SortOrder;
  meetDuration?: SortOrder;
  sender?: SortOrder;
  subject?: SortOrder;
  updatedAt?: SortOrder;
};
