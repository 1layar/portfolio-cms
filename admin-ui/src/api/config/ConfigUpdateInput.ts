import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ConfigUpdateInput = {
  colorSchema?: "dark" | "light" | null;
  language?: "id_ID" | "en_US" | null;
  user?: UserWhereUniqueInput;
};
