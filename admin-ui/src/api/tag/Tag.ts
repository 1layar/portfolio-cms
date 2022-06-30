import { Article } from "../article/Article";
import { JsonValue } from "type-fest";
import { Project } from "../project/Project";

export type Tag = {
  article?: Article | null;
  color: string | null;
  createdAt: Date;
  icon: string | null;
  id: string;
  name: JsonValue;
  project?: Project | null;
  slug: string;
  updatedAt: Date;
};
