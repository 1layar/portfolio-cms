import { ArticleWhereUniqueInput } from "../article/ArticleWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type CommentUpdateInput = {
  article?: ArticleWhereUniqueInput | null;
  author?: UserWhereUniqueInput | null;
  body?: InputJsonValue;
};
