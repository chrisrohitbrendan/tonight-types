import { z } from "zod";
export const GenreSchema = z.object({
    id: z.string(),
    name: z.string(),
});
