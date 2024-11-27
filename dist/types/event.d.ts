import { z } from "zod";
export declare const EventSchema: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<z.objectUtil.extendShape<z.objectUtil.extendShape<z.objectUtil.extendShape<{
    id: z.ZodString;
    name: z.ZodString;
    description: z.ZodString;
    city: z.ZodString;
    ticketUrl: z.ZodString;
    venues: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        description: z.ZodString;
        location: z.ZodString;
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
        barIds: z.ZodArray<z.ZodString, "many">;
        bars: z.ZodArray<z.ZodObject<{
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
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        name: string;
        location: string;
        id: string;
        description: string;
        images: {
            name: string;
            type: string;
            downloadURL: string;
            ref: string;
            lastModifiedTS: number;
        }[];
        barIds: string[];
        bars: {
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
        }[];
    }, {
        name: string;
        location: string;
        id: string;
        description: string;
        images: {
            name: string;
            type: string;
            downloadURL: string;
            ref: string;
            lastModifiedTS: number;
        }[];
        barIds: string[];
        bars: {
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
        }[];
    }>, "many">;
    organisers: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        customName: z.ZodNullable<z.ZodOptional<z.ZodString>>;
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
        videos: z.ZodArray<z.ZodObject<{
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
    }, "strip", z.ZodTypeAny, {
        name: string;
        id: string;
        images: {
            name: string;
            type: string;
            downloadURL: string;
            ref: string;
            lastModifiedTS: number;
        }[];
        videos: {
            name: string;
            type: string;
            downloadURL: string;
            ref: string;
            lastModifiedTS: number;
        }[];
        customName?: string | null | undefined;
    }, {
        name: string;
        id: string;
        images: {
            name: string;
            type: string;
            downloadURL: string;
            ref: string;
            lastModifiedTS: number;
        }[];
        videos: {
            name: string;
            type: string;
            downloadURL: string;
            ref: string;
            lastModifiedTS: number;
        }[];
        customName?: string | null | undefined;
    }>, "many">;
    genres: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        id: string;
    }, {
        name: string;
        id: string;
    }>, "many">;
    artists: z.ZodArray<z.ZodObject<{
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
    }>, "many">;
    youtubeUrl: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, {
    organiserIds: z.ZodArray<z.ZodString, "many">;
    venueIds: z.ZodArray<z.ZodString, "many">;
    artistIds: z.ZodArray<z.ZodString, "many">;
    genreIds: z.ZodArray<z.ZodString, "many">;
}>, {
    startDate: z.ZodDate;
    endDate: z.ZodDate;
}>, {
    bannerImages: z.ZodArray<z.ZodObject<{
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
    featuredImages: z.ZodArray<z.ZodObject<{
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
}>, z.objectUtil.extendShape<{
    title: z.ZodString;
    description: z.ZodString;
    confirmationType: z.ZodEnum<["email", "manual"]>;
    stags: z.ZodOptional<z.ZodObject<{
        description: z.ZodString;
        totalQuantity: z.ZodNumber;
        availableQuantity: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        description: string;
        totalQuantity: number;
        availableQuantity: number;
    }, {
        description: string;
        totalQuantity: number;
        availableQuantity: number;
    }>>;
    ladies: z.ZodOptional<z.ZodObject<{
        description: z.ZodString;
        totalQuantity: z.ZodNumber;
        availableQuantity: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        description: string;
        totalQuantity: number;
        availableQuantity: number;
    }, {
        description: string;
        totalQuantity: number;
        availableQuantity: number;
    }>>;
    couples: z.ZodOptional<z.ZodObject<{
        description: z.ZodString;
        totalQuantity: z.ZodNumber;
        availableQuantity: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        description: string;
        totalQuantity: number;
        availableQuantity: number;
    }, {
        description: string;
        totalQuantity: number;
        availableQuantity: number;
    }>>;
}, {
    enabled: z.ZodBoolean;
    showAvailableQuantity: z.ZodBoolean;
}>>, {
    published: z.ZodBoolean;
    available: z.ZodBoolean;
    featured: z.ZodBoolean;
}>, "strip", z.ZodTypeAny, {
    name: string;
    id: string;
    title: string;
    description: string;
    enabled: boolean;
    showAvailableQuantity: boolean;
    confirmationType: "manual" | "email";
    organiserIds: string[];
    venueIds: string[];
    artistIds: string[];
    genreIds: string[];
    startDate: Date;
    endDate: Date;
    bannerImages: {
        name: string;
        type: string;
        downloadURL: string;
        ref: string;
        lastModifiedTS: number;
    }[];
    featuredImages: {
        name: string;
        type: string;
        downloadURL: string;
        ref: string;
        lastModifiedTS: number;
    }[];
    published: boolean;
    available: boolean;
    featured: boolean;
    city: string;
    ticketUrl: string;
    venues: {
        name: string;
        location: string;
        id: string;
        description: string;
        images: {
            name: string;
            type: string;
            downloadURL: string;
            ref: string;
            lastModifiedTS: number;
        }[];
        barIds: string[];
        bars: {
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
        }[];
    }[];
    organisers: {
        name: string;
        id: string;
        images: {
            name: string;
            type: string;
            downloadURL: string;
            ref: string;
            lastModifiedTS: number;
        }[];
        videos: {
            name: string;
            type: string;
            downloadURL: string;
            ref: string;
            lastModifiedTS: number;
        }[];
        customName?: string | null | undefined;
    }[];
    genres: {
        name: string;
        id: string;
    }[];
    artists: {
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
    }[];
    youtubeUrl?: string | null | undefined;
    stags?: {
        description: string;
        totalQuantity: number;
        availableQuantity: number;
    } | undefined;
    ladies?: {
        description: string;
        totalQuantity: number;
        availableQuantity: number;
    } | undefined;
    couples?: {
        description: string;
        totalQuantity: number;
        availableQuantity: number;
    } | undefined;
}, {
    name: string;
    id: string;
    title: string;
    description: string;
    enabled: boolean;
    showAvailableQuantity: boolean;
    confirmationType: "manual" | "email";
    organiserIds: string[];
    venueIds: string[];
    artistIds: string[];
    genreIds: string[];
    startDate: Date;
    endDate: Date;
    bannerImages: {
        name: string;
        type: string;
        downloadURL: string;
        ref: string;
        lastModifiedTS: number;
    }[];
    featuredImages: {
        name: string;
        type: string;
        downloadURL: string;
        ref: string;
        lastModifiedTS: number;
    }[];
    published: boolean;
    available: boolean;
    featured: boolean;
    city: string;
    ticketUrl: string;
    venues: {
        name: string;
        location: string;
        id: string;
        description: string;
        images: {
            name: string;
            type: string;
            downloadURL: string;
            ref: string;
            lastModifiedTS: number;
        }[];
        barIds: string[];
        bars: {
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
        }[];
    }[];
    organisers: {
        name: string;
        id: string;
        images: {
            name: string;
            type: string;
            downloadURL: string;
            ref: string;
            lastModifiedTS: number;
        }[];
        videos: {
            name: string;
            type: string;
            downloadURL: string;
            ref: string;
            lastModifiedTS: number;
        }[];
        customName?: string | null | undefined;
    }[];
    genres: {
        name: string;
        id: string;
    }[];
    artists: {
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
    }[];
    youtubeUrl?: string | null | undefined;
    stags?: {
        description: string;
        totalQuantity: number;
        availableQuantity: number;
    } | undefined;
    ladies?: {
        description: string;
        totalQuantity: number;
        availableQuantity: number;
    } | undefined;
    couples?: {
        description: string;
        totalQuantity: number;
        availableQuantity: number;
    } | undefined;
}>;
export type Event = z.infer<typeof EventSchema>;
