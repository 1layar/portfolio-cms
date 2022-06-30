import { JsonValue } from "type-fest";
import { Category } from "../category/Category";
import { Comment } from "../comment/Comment";
import { Tag } from "../tag/Tag";

export type Article = {
  body: JsonValue;
  category?: Category | null;
  comments?: Array<Comment>;
  createdAt: Date;
  description: JsonValue;
  id: string;
  slug: string;
  tags?: Array<Tag>;
  thumbnail: string;
  title: JsonValue;
  updatedAt: Date;
};
