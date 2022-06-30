import { InputJsonValue } from "../../types";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { CommentUpdateManyWithoutArticlesInput } from "./CommentUpdateManyWithoutArticlesInput";
import { TagUpdateManyWithoutArticlesInput } from "./TagUpdateManyWithoutArticlesInput";

export type ArticleUpdateInput = {
  body?: InputJsonValue;
  category?: CategoryWhereUniqueInput | null;
  comments?: CommentUpdateManyWithoutArticlesInput;
  description?: InputJsonValue;
  slug?: string;
  tags?: TagUpdateManyWithoutArticlesInput;
  thumbnail?: string;
  title?: InputJsonValue;
};
