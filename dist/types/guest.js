import { z } from "zod";
const RsvpInfoSchema = z.object({
    lastRsvpedAt: z.date().optional(),
    lastRsvpedEventId: z.string().optional(),
    totalEventsRsvped: z.number().optional(),
});
export const GuestSchema = z
    .object({
    id: z.string(),
    name: z.string().min(3),
    email: z.string().email().optional(),
    phone: z.union([z.string(), z.number()]).transform((val) => val.toString()),
    lastVisitedAt: z.date().optional(),
    lastVisitedEventId: z.string().optional(),
    totalVisits: z.number().optional(),
})
    .merge(RsvpInfoSchema);
