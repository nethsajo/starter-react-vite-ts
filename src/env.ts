import z from 'zod';
import { STAGES } from './constants/env';

const envSchema = z.object({
  STAGE: z.nativeEnum(STAGES).default(STAGES.Local),
});

export const envConfig = envSchema.parse({
  STAGE: import.meta.env.VITE_STAGE,
});

export type EnvConfig = z.infer<typeof envSchema>;
