import { UserProfile } from "../userProfile/UserProfile";

export type Skill = {
  createdAt: Date;
  experience: number | null;
  icon: string | null;
  id: string;
  name: string | null;
  updatedAt: Date;
  userProfile?: UserProfile | null;
};
