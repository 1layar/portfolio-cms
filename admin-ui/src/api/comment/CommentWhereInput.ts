import { ArticleWhereUniqueInput } from "../article/ArticleWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";

export type CommentWhereInput = {
  article?: ArticleWhereUniqueInput;
  author?: UserWhereUniqueInput;
  body?: JsonFilter;
  id?: StringFilter;
};
