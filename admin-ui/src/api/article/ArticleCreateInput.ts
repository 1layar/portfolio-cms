import { InputJsonValue } from "../../types";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { CommentCreateNestedManyWithoutArticlesInput } from "./CommentCreateNestedManyWithoutArticlesInput";
import { TagCreateNestedManyWithoutArticlesInput } from "./TagCreateNestedManyWithoutArticlesInput";

export type ArticleCreateInput = {
  body: InputJsonValue;
  category?: CategoryWhereUniqueInput | null;
  comments?: CommentCreateNestedManyWithoutArticlesInput;
  description: InputJsonValue;
  slug: string;
  tags?: TagCreateNestedManyWithoutArticlesInput;
  thumbnail: string;
  title: InputJsonValue;
};
