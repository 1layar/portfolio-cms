import { CommentCreateNestedManyWithoutUsersInput } from "./CommentCreateNestedManyWithoutUsersInput";
import { ConfigWhereUniqueInput } from "../config/ConfigWhereUniqueInput";
import { ProjectCreateNestedManyWithoutUsersInput } from "./ProjectCreateNestedManyWithoutUsersInput";
import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type UserCreateInput = {
  comments?: CommentCreateNestedManyWithoutUsersInput;
  config?: ConfigWhereUniqueInput | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: Array<string>;
  starredProjects?: ProjectCreateNestedManyWithoutUsersInput;
  username: string;
  userProfile?: UserProfileWhereUniqueInput | null;
};
