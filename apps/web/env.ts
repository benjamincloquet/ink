import { z } from "zod";

const envSchema = z.object({
  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),
});

declare global {
  namespace NodeJs {
    interface ProcessEnv extends z.infer<typeof envSchema> {}
  }
}

export default envSchema.parse(process.env);
