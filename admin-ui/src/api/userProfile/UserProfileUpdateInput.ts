import { InputJsonValue } from "../../types";
import { SkillUpdateManyWithoutUserProfilesInput } from "./SkillUpdateManyWithoutUserProfilesInput";
import { ToolUpdateManyWithoutUserProfilesInput } from "./ToolUpdateManyWithoutUserProfilesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserProfileUpdateInput = {
  address?: string | null;
  biography?: InputJsonValue;
  contactEmail?: string | null;
  facebookUsername?: string | null;
  githubUsername?: string | null;
  hobby?: InputJsonValue;
  instagramUsername?: string | null;
  linkedinUsername?: string | null;
  location?: string | null;
  phoneNumber?: string | null;
  quote?: InputJsonValue;
  skills?: SkillUpdateManyWithoutUserProfilesInput;
  tools?: ToolUpdateManyWithoutUserProfilesInput;
  twitterUsername?: string | null;
  user?: UserWhereUniqueInput;
  whatsappUsernname?: string | null;
  youtubeUsername?: string | null;
};
