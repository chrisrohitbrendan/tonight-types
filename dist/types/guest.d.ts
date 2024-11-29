import { z } from "zod";
export declare const GuestSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodString;
    name: z.ZodString;
    email: z.ZodOptional<z.ZodString>;
    phone: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>;
    lastVisitedAt: z.ZodOptional<z.ZodDate>;
    lastVisitedEventId: z.ZodOptional<z.ZodString>;
    totalVisits: z.ZodOptional<z.ZodNumber>;
}, {
    lastRsvpedAt: z.ZodOptional<z.ZodDate>;
    lastRsvpedEventId: z.ZodOptional<z.ZodString>;
    totalEventsRsvped: z.ZodOptional<z.ZodNumber>;
}>, "strip", z.ZodTypeAny, {
    name: string;
    id: string;
    phone: string;
    email?: string | undefined;
    lastRsvpedAt?: Date | undefined;
    lastRsvpedEventId?: string | undefined;
    totalEventsRsvped?: number | undefined;
    lastVisitedAt?: Date | undefined;
    lastVisitedEventId?: string | undefined;
    totalVisits?: number | undefined;
}, {
    name: string;
    id: string;
    phone: string | number;
    email?: string | undefined;
    lastRsvpedAt?: Date | undefined;
    lastRsvpedEventId?: string | undefined;
    totalEventsRsvped?: number | undefined;
    lastVisitedAt?: Date | undefined;
    lastVisitedEventId?: string | undefined;
    totalVisits?: number | undefined;
}>;
export type Guest = z.infer<typeof GuestSchema>;
