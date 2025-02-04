import { z } from "zod";
export declare const OrganiserSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    customName: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    images: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodObject<{
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
    }>, "many">>>;
    videos: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodObject<{
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
    }>, "many">>>;
}, "strip", z.ZodTypeAny, {
    name: string;
    id: string;
    images?: {
        name: string;
        type: string;
        downloadURL: string;
        ref: string;
        lastModifiedTS: number;
    }[] | null | undefined;
    customName?: string | null | undefined;
    videos?: {
        name: string;
        type: string;
        downloadURL: string;
        ref: string;
        lastModifiedTS: number;
    }[] | null | undefined;
}, {
    name: string;
    id: string;
    images?: {
        name: string;
        type: string;
        downloadURL: string;
        ref: string;
        lastModifiedTS: number;
    }[] | null | undefined;
    customName?: string | null | undefined;
    videos?: {
        name: string;
        type: string;
        downloadURL: string;
        ref: string;
        lastModifiedTS: number;
    }[] | null | undefined;
}>;
export type Organiser = z.infer<typeof OrganiserSchema>;
