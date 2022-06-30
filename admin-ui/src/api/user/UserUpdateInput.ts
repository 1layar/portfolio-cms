import { CommentUpdateManyWithoutUsersInput } from "./CommentUpdateManyWithoutUsersInput";
import { ConfigWhereUniqueInput } from "../config/ConfigWhereUniqueInput";
import { ProjectUpdateManyWithoutUsersInput } from "./ProjectUpdateManyWithoutUsersInput";
import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type UserUpdateInput = {
  comments?: CommentUpdateManyWithoutUsersInput;
  config?: ConfigWhereUniqueInput | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: Array<string>;
  starredProjects?: ProjectUpdateManyWithoutUsersInput;
  username?: string;
  userProfile?: UserProfileWhereUniqueInput | null;
};
