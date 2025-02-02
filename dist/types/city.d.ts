import { z } from "zod";
export declare const CitySchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    isActive: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    name: string;
    id: string;
    isActive: boolean;
}, {
    name: string;
    id: string;
    isActive: boolean;
}>;
export type City = z.infer<typeof CitySchema>;
