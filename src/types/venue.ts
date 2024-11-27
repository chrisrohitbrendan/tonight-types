import { z } from "zod";
import { GCPFileSchema } from "./gcpFileSchema";
import { BarSchema } from "./bar";

export const VenueSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  location: z.string(),
  images: z.array(GCPFileSchema),
  barIds: z.array(z.string()),
  bars: z.array(BarSchema),
});

export type Venue = z.infer<typeof VenueSchema>;
