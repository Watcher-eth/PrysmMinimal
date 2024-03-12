import type { Config } from 'drizzle-kit';
export default {
  schema: './lib/db/schema.ts',
  out: './lib/db/drizzle',
  driver: 'expo', // <--- very important
} satisfies Config;
