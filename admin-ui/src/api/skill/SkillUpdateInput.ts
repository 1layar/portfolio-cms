import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type SkillUpdateInput = {
  experience?: number | null;
  icon?: string | null;
  name?: string | null;
  userProfile?: UserProfileWhereUniqueInput | null;
};
