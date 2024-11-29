import { z } from "zod";
export const RsvpSchema = z.object({
    id: z.string(),
    eventId: z.string(),
    guestId: z.string().optional(),
    stagCount: z.number(),
    ladyCount: z.number(),
    couplesCount: z.number(),
    name: z.string().min(3),
    email: z.string().email(),
    phone: z.string().min(10).max(10),
    status: z.enum(["Pending", "Confirmed", "Checked In", "Cancelled"]),
    referrer: z.string().default("N/A"),
    checkedInTime: z.date().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
});
