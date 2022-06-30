import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type SkillCreateInput = {
  experience?: number | null;
  icon?: string | null;
  name?: string | null;
  userProfile?: UserProfileWhereUniqueInput | null;
};
