import { z } from "zod";
export declare const CitySchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    isAvailable: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    name: string;
    id: string;
    isAvailable: boolean;
}, {
    name: string;
    id: string;
    isAvailable: boolean;
}>;
export type City = z.infer<typeof CitySchema>;
