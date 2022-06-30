import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ScheduleWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  meetAt?: DateTimeNullableFilter;
  meetDuration?: FloatNullableFilter;
  sender?: StringNullableFilter;
  subject?: "JobOffer" | "Teaching" | "Freelance";
};
