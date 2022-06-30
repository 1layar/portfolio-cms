import { ArticleWhereUniqueInput } from "../article/ArticleWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type TagWhereInput = {
  article?: ArticleWhereUniqueInput;
  color?: StringNullableFilter;
  icon?: StringNullableFilter;
  id?: StringFilter;
  name?: JsonFilter;
  project?: ProjectWhereUniqueInput;
  slug?: StringFilter;
};
