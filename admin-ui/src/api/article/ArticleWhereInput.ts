import { JsonFilter } from "../../util/JsonFilter";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { TagListRelationFilter } from "../tag/TagListRelationFilter";

export type ArticleWhereInput = {
  body?: JsonFilter;
  category?: CategoryWhereUniqueInput;
  comments?: CommentListRelationFilter;
  description?: JsonFilter;
  id?: StringFilter;
  slug?: StringFilter;
  tags?: TagListRelationFilter;
  thumbnail?: StringFilter;
  title?: JsonFilter;
};
