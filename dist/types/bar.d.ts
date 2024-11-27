import { z } from "zod";
export declare const BarSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    images: z.ZodArray<z.ZodObject<{
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
    }>, "many">;
    shortDescription: z.ZodString;
    longDescription: z.ZodString;
    location: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    location: string;
    id: string;
    images: {
        name: string;
        type: string;
        downloadURL: string;
        ref: string;
        lastModifiedTS: number;
    }[];
    shortDescription: string;
    longDescription: string;
}, {
    name: string;
    location: string;
    id: string;
    images: {
        name: string;
        type: string;
        downloadURL: string;
        ref: string;
        lastModifiedTS: number;
    }[];
    shortDescription: string;
    longDescription: string;
}>;
export type Bar = z.infer<typeof BarSchema>;
