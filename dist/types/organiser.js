import { z } from "zod";
import { GCPFileSchema } from "./gcpFileSchema";
export const OrganiserSchema = z.object({
    id: z.string(),
    name: z.string(),
    customName: z.string().optional().nullable(),
    images: z.array(GCPFileSchema).optional().nullable(),
    videos: z.array(GCPFileSchema).optional().nullable(),
});
