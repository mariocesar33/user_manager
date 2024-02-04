import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    API_URL: z.string().url(),
  },

  client: {
    NEXT_PUBLIC_API_URL: z.string().url(),
    NEXT_PUBLIC_ENABLE_API_DELAY: z
      .string()
      .transform((value) => value === 'true'),
  },

  runtimeEnv: {
    API_URL: process.env.API_URL,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_ENABLE_API_DELAY: process.env.NEXT_PUBLIC_ENABLE_API_DELAY,
  },
})
