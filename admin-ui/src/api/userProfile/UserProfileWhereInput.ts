import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { SkillListRelationFilter } from "../skill/SkillListRelationFilter";
import { ToolListRelationFilter } from "../tool/ToolListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserProfileWhereInput = {
  address?: StringNullableFilter;
  biography?: JsonFilter;
  contactEmail?: StringNullableFilter;
  facebookUsername?: StringNullableFilter;
  githubUsername?: StringNullableFilter;
  hobby?: JsonFilter;
  id?: StringFilter;
  instagramUsername?: StringNullableFilter;
  linkedinUsername?: StringNullableFilter;
  location?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  quote?: JsonFilter;
  skills?: SkillListRelationFilter;
  tools?: ToolListRelationFilter;
  twitterUsername?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  whatsappUsernname?: StringNullableFilter;
  youtubeUsername?: StringNullableFilter;
};
