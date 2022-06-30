import { JsonFilter } from "../../util/JsonFilter";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TagListRelationFilter } from "../tag/TagListRelationFilter";

export type ProjectWhereInput = {
  body?: JsonFilter;
  category?: CategoryWhereUniqueInput;
  id?: StringFilter;
  publishAt?: StringNullableFilter;
  slug?: StringFilter;
  stars?: UserWhereUniqueInput;
  tags?: TagListRelationFilter;
  thumbnail?: StringFilter;
  title?: JsonFilter;
};
