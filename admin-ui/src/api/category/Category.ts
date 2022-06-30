import { Article } from "../article/Article";
import { JsonValue } from "type-fest";
import { Project } from "../project/Project";

export type Category = {
  articles?: Array<Article>;
  color: string | null;
  createdAt: Date;
  id: string;
  name: JsonValue;
  projects?: Array<Project>;
  slug: string;
  updatedAt: Date;
};
