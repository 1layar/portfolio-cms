import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type ToolCreateInput = {
  colored?: boolean | null;
  icon?: string | null;
  name?: string | null;
  userProfile?: UserProfileWhereUniqueInput | null;
};
