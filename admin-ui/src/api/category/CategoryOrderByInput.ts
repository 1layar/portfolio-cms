import { SortOrder } from "../../util/SortOrder";

export type CategoryOrderByInput = {
  color?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  slug?: SortOrder;
  updatedAt?: SortOrder;
};
