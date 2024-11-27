import { z } from "zod";
export declare const ArtistSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    profileImages: z.ZodArray<z.ZodObject<{
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
    instagramUrl: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    spotifyUrl: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    soundcloudUrl: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    youtubeUrl: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    name: string;
    id: string;
    profileImages: {
        name: string;
        type: string;
        downloadURL: string;
        ref: string;
        lastModifiedTS: number;
    }[];
    instagramUrl?: string | null | undefined;
    spotifyUrl?: string | null | undefined;
    soundcloudUrl?: string | null | undefined;
    youtubeUrl?: string | null | undefined;
}, {
    name: string;
    id: string;
    profileImages: {
        name: string;
        type: string;
        downloadURL: string;
        ref: string;
        lastModifiedTS: number;
    }[];
    instagramUrl?: string | null | undefined;
    spotifyUrl?: string | null | undefined;
    soundcloudUrl?: string | null | undefined;
    youtubeUrl?: string | null | undefined;
}>;
export type Artist = z.infer<typeof ArtistSchema>;
