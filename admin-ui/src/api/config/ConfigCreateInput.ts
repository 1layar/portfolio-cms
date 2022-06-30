import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ConfigCreateInput = {
  colorSchema?: "dark" | "light" | null;
  language?: "id_ID" | "en_US" | null;
  user?: UserWhereUniqueInput;
};
