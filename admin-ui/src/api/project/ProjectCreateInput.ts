import { InputJsonValue } from "../../types";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TagCreateNestedManyWithoutProjectsInput } from "./TagCreateNestedManyWithoutProjectsInput";

export type ProjectCreateInput = {
  body: InputJsonValue;
  category?: CategoryWhereUniqueInput | null;
  demoUrl?: string | null;
  publishAt?: string | null;
  slug: string;
  sourceUrl?: string | null;
  stars?: UserWhereUniqueInput | null;
  tags?: TagCreateNestedManyWithoutProjectsInput;
  thumbnail: string;
  title: InputJsonValue;
};
