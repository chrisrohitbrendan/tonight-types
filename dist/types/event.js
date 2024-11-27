import { z } from "zod";
import { ArtistSchema } from "./artist";
import { GCPFileSchema } from "./gcpFileSchema";
import { VenueSchema } from "./venue";
import { GenreSchema } from "./genre";
import { OrganiserSchema } from "./organiser";
import { GuestlistInfoSchema } from "./guestlistInfo";
const IdsSchema = z.object({
    organiserIds: z.array(z.string()),
    venueIds: z.array(z.string()),
    artistIds: z.array(z.string()),
    genreIds: z.array(z.string()),
});
const DatesSchema = z.object({
    startDate: z.date(),
    endDate: z.date(),
});
const ImagesSchema = z.object({
    bannerImages: z.array(GCPFileSchema),
    featuredImages: z.array(GCPFileSchema),
});
const FlagsSchema = z.object({
    published: z.boolean(),
    available: z.boolean(),
    featured: z.boolean(),
});
export const EventSchema = z
    .object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    city: z.string(),
    ticketUrl: z.string().url(),
    venues: z.array(VenueSchema),
    organisers: z.array(OrganiserSchema),
    genres: z.array(GenreSchema),
    artists: z.array(ArtistSchema),
    youtubeUrl: z.string().url().optional().nullable(),
    guestlistInfo: GuestlistInfoSchema.optional().nullable(),
})
    .merge(IdsSchema)
    .merge(DatesSchema)
    .merge(ImagesSchema)
    .merge(FlagsSchema);
