import { JsonValue } from "type-fest";
import { Skill } from "../skill/Skill";
import { Tool } from "../tool/Tool";
import { User } from "../user/User";

export type UserProfile = {
  address: string | null;
  biography: JsonValue;
  contactEmail: string | null;
  createdAt: Date;
  facebookUsername: string | null;
  githubUsername: string | null;
  hobby: JsonValue;
  id: string;
  instagramUsername: string | null;
  linkedinUsername: string | null;
  location: string | null;
  phoneNumber: string | null;
  quote: JsonValue;
  skills?: Array<Skill>;
  tools?: Array<Tool>;
  twitterUsername: string | null;
  updatedAt: Date;
  user?: User;
  whatsappUsernname: string | null;
  youtubeUsername: string | null;
};
