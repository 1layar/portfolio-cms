import { UserProfile as TUserProfile } from "../api/userProfile/UserProfile";

export const USERPROFILE_TITLE_FIELD = "facebookUsername";

export const UserProfileTitle = (record: TUserProfile): string => {
  return record.facebookUsername || record.id;
};
