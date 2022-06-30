import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { ConfigWhereUniqueInput } from "../config/ConfigWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProjectListRelationFilter } from "../project/ProjectListRelationFilter";
import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type UserWhereInput = {
  comments?: CommentListRelationFilter;
  config?: ConfigWhereUniqueInput;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  starredProjects?: ProjectListRelationFilter;
  username?: StringFilter;
  userProfile?: UserProfileWhereUniqueInput;
};
