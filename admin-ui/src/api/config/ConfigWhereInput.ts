import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ConfigWhereInput = {
  colorSchema?: "dark" | "light";
  id?: StringFilter;
  language?: "id_ID" | "en_US";
  user?: UserWhereUniqueInput;
};
