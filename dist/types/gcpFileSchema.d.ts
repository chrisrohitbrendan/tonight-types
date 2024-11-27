import { z } from "zod";
export declare const GCPFileSchema: z.ZodObject<{
    downloadURL: z.ZodString;
    name: z.ZodString;
    ref: z.ZodString;
    type: z.ZodString;
    lastModifiedTS: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    name: string;
    type: string;
    downloadURL: string;
    ref: string;
    lastModifiedTS: number;
}, {
    name: string;
    type: string;
    downloadURL: string;
    ref: string;
    lastModifiedTS: number;
}>;
export type GCPFile = z.infer<typeof GCPFileSchema>;
