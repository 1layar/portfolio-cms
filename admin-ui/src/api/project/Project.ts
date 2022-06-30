import { JsonValue } from "type-fest";
import { Category } from "../category/Category";
import { User } from "../user/User";
import { Tag } from "../tag/Tag";

export type Project = {
  body: JsonValue;
  category?: Category | null;
  createdAt: Date;
  demoUrl: string | null;
  id: string;
  publishAt: string | null;
  slug: string;
  sourceUrl: string | null;
  stars?: User | null;
  tags?: Array<Tag>;
  thumbnail: string;
  title: JsonValue;
  updatedAt: Date;
};
