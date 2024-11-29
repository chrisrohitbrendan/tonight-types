import { z } from "zod";
export declare const GuestlistInfoSchema: z.ZodObject<z.objectUtil.extendShape<{
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
    showAvailableQuantity: z.ZodNullable<z.ZodOptional<z.ZodBoolean>>;
}>, "strip", z.ZodTypeAny, {
    title: string;
    description: string;
    enabled: boolean;
    confirmationType: "manual" | "email";
    showAvailableQuantity?: boolean | null | undefined;
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
    title: string;
    description: string;
    enabled: boolean;
    confirmationType: "manual" | "email";
    showAvailableQuantity?: boolean | null | undefined;
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
export type GuestlistInfo = z.infer<typeof GuestlistInfoSchema>;
