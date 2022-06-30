import { SortOrder } from "../../util/SortOrder";

export type ArticleOrderByInput = {
  body?: SortOrder;
  categoryId?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  slug?: SortOrder;
  thumbnail?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
