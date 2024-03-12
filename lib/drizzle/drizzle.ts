import { drizzle } from "drizzle-orm/planetscale-serverless";
import { Client } from "@planetscale/database";
const client = new Client({
  host: process.env["DATABASE_HOST"],
  username: process.env["DATABASE_USERNAME"],
  password: process.env["DATABASE_PASSWORD"],
});
const db = drizzle(client);
