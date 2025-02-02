import { z } from "zod";

export const CitySchema = z.object({
  id: z.string(),
  name: z.string(),
  isActive: z.boolean(),
});

export type City = z.infer<typeof CitySchema>;
