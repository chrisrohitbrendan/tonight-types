import { z } from "zod";
import { GCPFileSchema } from "./gcpFileSchema";

export const ArtistSchema = z.object({
  id: z.string(),
  name: z.string(),
  profileImages: z.array(GCPFileSchema),
  instagramUrl: z.string().optional().nullable(),
  spotifyUrl: z.string().optional().nullable(),
  soundcloudUrl: z.string().optional().nullable(),
  youtubeUrl: z.string().optional().nullable(),
});

export type Artist = z.infer<typeof ArtistSchema>;
