import { Article } from "../article/Article";
import { User } from "../user/User";
import { JsonValue } from "type-fest";

export type Comment = {
  article?: Article | null;
  author?: User | null;
  body: JsonValue;
  createdAt: Date;
  id: string;
  updatedAt: Date;
};
