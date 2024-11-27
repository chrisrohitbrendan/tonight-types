import { z } from "zod";
export const GCPFileSchema = z.object({
    downloadURL: z.string(),
    name: z.string(),
    ref: z.string(),
    type: z.string(),
    lastModifiedTS: z.number(),
});
