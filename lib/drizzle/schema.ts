import { sql } from "drizzle-orm";
import {
  json,
  mysqlTable,
  timestamp,
  varchar,
  serial,
  text,
  int,
  foreignKey,
} from "drizzle-orm/mysql-core";

export const users = mysqlTable("users", {
  // User internal id (can be different from external auth provider id)
  internal_id: varchar("internal_id", { length: 191 }).primaryKey().notNull(),
  // Privy user id
  external_auth_provider_user_id: varchar("external_auth_provider_user_id", {
    length: 191,
  }).notNull(),
  liquidityPoints: int("liquidityPoints").default(0).notNull(),
  rewardPoints: int("rewardPoints").default(0).notNull(),
  walletAddress: varchar("walletAddress", { length: 42 }),
  socials: json("socials")
    .default(sql`'[]'`)
    .notNull(),
  friends: json("friends")
    .default(sql`'[]'`)
    .notNull(),
  // Push notification subscription for PWA
  web_push_subscription: json("subscription"),
  // Timestamps for record keeping
  created_at: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updated_at: timestamp("updated_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull()
    .onUpdateNow(),
});

export type User = typeof users.$inferSelect; // return type when queried
export type NewUser = typeof users.$inferInsert; // insert type

export const topics = mysqlTable("topics", {
  // Unique generated UUID
  id: varchar("id", { length: 36 }).primaryKey(),
  // Title of the topic
  title: varchar("title", { length: 255 }).notNull(),
  // Description of the topic
  description: text("description").notNull(),
  // Image URL or reference
  image: varchar("image", { length: 2048 }),
});

export type Topic = typeof topics.$inferSelect; // Return type when queried
export type NewTopic = typeof topics.$inferInsert; // Insert type

export const markets = mysqlTable(
  "markets",
  {
    id: varchar("id", { length: 36 }).primaryKey(), // UUID primary key
    topicId: varchar("topicId", { length: 36 }).references(() => topics.id), // Foreign key to topics
    title: varchar("title", { length: 255 }).notNull(),
    question: text("question").notNull(),
    options: json("options"), // JSON to store the options with name and amount
    image: varchar("image", { length: 2048 }),
    participants: json("participants"), // JSON to store an array of Ethereum wallet addresses
  },
  (table) => {
    return {
      topicReference: foreignKey({
        columns: [table.topicId],
        foreignColumns: [topics.id],
        name: "fk_market_topic",
      }),
    };
  }
);

export type Market = typeof markets.$inferSelect; // Return type when queried
export type NewMarket = typeof markets.$inferInsert; // Insert type
