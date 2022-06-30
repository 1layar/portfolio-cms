import { InputJsonValue } from "../../types";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TagUpdateManyWithoutProjectsInput } from "./TagUpdateManyWithoutProjectsInput";

export type ProjectUpdateInput = {
  body?: InputJsonValue;
  category?: CategoryWhereUniqueInput | null;
  demoUrl?: string | null;
  publishAt?: string | null;
  slug?: string;
  sourceUrl?: string | null;
  stars?: UserWhereUniqueInput | null;
  tags?: TagUpdateManyWithoutProjectsInput;
  thumbnail?: string;
  title?: InputJsonValue;
};
