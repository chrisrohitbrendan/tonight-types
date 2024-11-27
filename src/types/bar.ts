import { z } from "zod";
import { GCPFileSchema } from "./gcpFileSchema";

export const BarSchema = z.object({
  id: z.string(),
  name: z.string(),
  images: z.array(GCPFileSchema),
  shortDescription: z.string(),
  longDescription: z.string(),
  location: z.string(),
});

export type Bar = z.infer<typeof BarSchema>;
