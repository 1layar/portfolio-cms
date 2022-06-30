import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type SkillWhereInput = {
  experience?: IntNullableFilter;
  icon?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  userProfile?: UserProfileWhereUniqueInput;
};
