import { z } from "zod";

const TicketInfoSchema = z.object({
  description: z.string(),
  totalQuantity: z.number(),
  availableQuantity: z.number(),
});

const FlagsSchema = z.object({
  enabled: z.boolean().optional().nullable(),
  showAvailableQuantity: z.boolean().optional().nullable(),
});

export const GuestlistInfoSchema = z
  .object({
    title: z.string(),
    description: z.string(),
    confirmationType: z.enum(["email", "manual"]),
    stags: TicketInfoSchema.optional(),
    ladies: TicketInfoSchema.optional(),
    couples: TicketInfoSchema.optional(),
  })
  .merge(FlagsSchema);

export type GuestlistInfo = z.infer<typeof GuestlistInfoSchema>;
