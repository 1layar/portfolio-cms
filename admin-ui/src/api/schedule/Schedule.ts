export type Schedule = {
  createdAt: Date;
  description: string | null;
  id: string;
  meetAt: Date | null;
  meetDuration: number | null;
  sender: string | null;
  subject?: "JobOffer" | "Teaching" | "Freelance" | null;
  updatedAt: Date;
};
