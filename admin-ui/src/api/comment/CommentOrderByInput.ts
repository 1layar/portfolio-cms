import { SortOrder } from "../../util/SortOrder";

export type CommentOrderByInput = {
  articleId?: SortOrder;
  authorId?: SortOrder;
  body?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
