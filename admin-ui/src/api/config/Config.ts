import { User } from "../user/User";

export type Config = {
  colorSchema?: "dark" | "light" | null;
  createdAt: Date;
  id: string;
  language?: "id_ID" | "en_US" | null;
  updatedAt: Date;
  user?: User;
};
