export type ScheduleUpdateInput = {
  description?: string | null;
  meetAt?: Date | null;
  meetDuration?: number | null;
  sender?: string | null;
  subject?: "JobOffer" | "Teaching" | "Freelance" | null;
};
