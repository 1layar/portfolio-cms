import { ArticleListRelationFilter } from "../article/ArticleListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { ProjectListRelationFilter } from "../project/ProjectListRelationFilter";

export type CategoryWhereInput = {
  articles?: ArticleListRelationFilter;
  color?: StringNullableFilter;
  id?: StringFilter;
  name?: JsonFilter;
  projects?: ProjectListRelationFilter;
  slug?: StringFilter;
};
