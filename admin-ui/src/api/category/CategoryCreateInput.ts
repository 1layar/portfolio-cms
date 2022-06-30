import { ArticleCreateNestedManyWithoutCategoriesInput } from "./ArticleCreateNestedManyWithoutCategoriesInput";
import { InputJsonValue } from "../../types";
import { ProjectCreateNestedManyWithoutCategoriesInput } from "./ProjectCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  articles?: ArticleCreateNestedManyWithoutCategoriesInput;
  color?: string | null;
  name: InputJsonValue;
  projects?: ProjectCreateNestedManyWithoutCategoriesInput;
  slug: string;
};
