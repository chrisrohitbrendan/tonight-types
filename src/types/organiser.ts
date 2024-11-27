import { z } from "zod";
import { GCPFileSchema } from "./gcpFileSchema";

export const OrganiserSchema = z.object({
  id: z.string(),
  name: z.string(),
  customName: z.string().optional().nullable(),
  images: z.array(GCPFileSchema),
  videos: z.array(GCPFileSchema),
});

export type Organiser = z.infer<typeof OrganiserSchema>;
