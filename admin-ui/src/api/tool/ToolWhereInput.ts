import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type ToolWhereInput = {
  colored?: BooleanNullableFilter;
  icon?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  userProfile?: UserProfileWhereUniqueInput;
};
