import { ArticleWhereUniqueInput } from "../article/ArticleWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type TagUpdateInput = {
  article?: ArticleWhereUniqueInput | null;
  color?: string | null;
  icon?: string | null;
  name?: InputJsonValue;
  project?: ProjectWhereUniqueInput | null;
  slug?: string;
};
