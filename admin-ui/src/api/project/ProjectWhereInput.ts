import { JsonFilter } from "../../util/JsonFilter";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TagListRelationFilter } from "../tag/TagListRelationFilter";

export type ProjectWhereInput = {
  body?: JsonFilter;
  category?: CategoryWhereUniqueInput;
  demoUrl?: StringNullableFilter;
  id?: StringFilter;
  publishAt?: StringNullableFilter;
  slug?: StringFilter;
  sourceUrl?: StringNullableFilter;
  stars?: UserWhereUniqueInput;
  tags?: TagListRelationFilter;
  thumbnail?: StringFilter;
  title?: JsonFilter;
};
