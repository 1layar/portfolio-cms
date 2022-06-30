import { ConfigWhereInput } from "./ConfigWhereInput";
import { ConfigOrderByInput } from "./ConfigOrderByInput";

export type ConfigFindManyArgs = {
  where?: ConfigWhereInput;
  orderBy?: Array<ConfigOrderByInput>;
  skip?: number;
  take?: number;
};
