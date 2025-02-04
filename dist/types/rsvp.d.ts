import { z } from "zod";
export declare const RsvpSchema: z.ZodObject<{
    id: z.ZodString;
    eventId: z.ZodString;
    guestId: z.ZodOptional<z.ZodString>;
    stagCount: z.ZodNumber;
    ladyCount: z.ZodNumber;
    couplesCount: z.ZodNumber;
    name: z.ZodString;
    email: z.ZodString;
    phone: z.ZodString;
    status: z.ZodEnum<["Pending", "Confirmed", "Checked In", "Cancelled"]>;
    referrer: z.ZodDefault<z.ZodString>;
    checkedInTime: z.ZodOptional<z.ZodDate>;
    createdAt: z.ZodOptional<z.ZodDate>;
    updatedAt: z.ZodOptional<z.ZodDate>;
}, "strip", z.ZodTypeAny, {
    name: string;
    id: string;
    referrer: string;
    email: string;
    status: "Pending" | "Confirmed" | "Checked In" | "Cancelled";
    eventId: string;
    stagCount: number;
    ladyCount: number;
    couplesCount: number;
    phone: string;
    guestId?: string | undefined;
    checkedInTime?: Date | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}, {
    name: string;
    id: string;
    email: string;
    status: "Pending" | "Confirmed" | "Checked In" | "Cancelled";
    eventId: string;
    stagCount: number;
    ladyCount: number;
    couplesCount: number;
    phone: string;
    referrer?: string | undefined;
    guestId?: string | undefined;
    checkedInTime?: Date | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}>;
export type Rsvp = z.infer<typeof RsvpSchema>;
