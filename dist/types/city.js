import { z } from "zod";
export const CitySchema = z.object({
    id: z.string(),
    name: z.string(),
    isAvailable: z.boolean(),
});
