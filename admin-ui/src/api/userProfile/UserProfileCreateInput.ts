import { InputJsonValue } from "../../types";
import { SkillCreateNestedManyWithoutUserProfilesInput } from "./SkillCreateNestedManyWithoutUserProfilesInput";
import { ToolCreateNestedManyWithoutUserProfilesInput } from "./ToolCreateNestedManyWithoutUserProfilesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserProfileCreateInput = {
  address?: string | null;
  biography?: InputJsonValue;
  contactEmail?: string | null;
  facebookUsername?: string | null;
  githubUsername?: string | null;
  hobby: InputJsonValue;
  instagramUsername?: string | null;
  linkedinUsername?: string | null;
  location?: string | null;
  phoneNumber?: string | null;
  quote: InputJsonValue;
  skills?: SkillCreateNestedManyWithoutUserProfilesInput;
  tools?: ToolCreateNestedManyWithoutUserProfilesInput;
  twitterUsername?: string | null;
  user?: UserWhereUniqueInput;
  whatsappUsernname?: string | null;
  youtubeUsername?: string | null;
};
