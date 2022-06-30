import { UserProfile } from "../userProfile/UserProfile";

export type Tool = {
  colored: boolean | null;
  createdAt: Date;
  icon: string | null;
  id: string;
  name: string | null;
  updatedAt: Date;
  userProfile?: UserProfile | null;
};
