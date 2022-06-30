import { ArticleUpdateManyWithoutCategoriesInput } from "./ArticleUpdateManyWithoutCategoriesInput";
import { InputJsonValue } from "../../types";
import { ProjectUpdateManyWithoutCategoriesInput } from "./ProjectUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  articles?: ArticleUpdateManyWithoutCategoriesInput;
  color?: string | null;
  name?: InputJsonValue;
  projects?: ProjectUpdateManyWithoutCategoriesInput;
  slug?: string;
};
