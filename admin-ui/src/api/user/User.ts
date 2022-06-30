import { Comment } from "../comment/Comment";
import { Config } from "../config/Config";
import { Project } from "../project/Project";
import { UserProfile } from "../userProfile/UserProfile";

export type User = {
  comments?: Array<Comment>;
  config?: Config | null;
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: Array<string>;
  starredProjects?: Array<Project>;
  updatedAt: Date;
  username: string;
  userProfile?: UserProfile | null;
};
