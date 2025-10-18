import { relations } from "drizzle-orm";
import {
  boolean,
  integer,
  pgTable,
  timestamp,
  varchar,
  json,
  text,
} from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  name: varchar("name", { length: 255 }).notNull(),
  credits: integer("credits").default(2).notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
});

export const projectTable = pgTable("projects", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  projectId: varchar("project_id"),
  createBy: varchar("create_by")
    .references(() => usersTable.email)
    .notNull(),
  createdOn: timestamp("created_on").defaultNow(),
});
export const frameTable = pgTable("frames", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  frameId: varchar("frame_id"),
  designCode: text(),
  projectId: varchar("project_id")
    .references(() => projectTable.projectId)
    .notNull(),
  createdOn: timestamp("created_on").defaultNow(),
});
export const chatTable = pgTable("chats", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  frameId: varchar("frameId").references(() => frameTable.frameId),
  createBy: varchar("create_by")
    .references(() => usersTable.email)
    .notNull(),
  createdOn: timestamp("created_on").defaultNow(),
  chatMessage: json("chat_message"),
});
export const sectionsTable = pgTable("sections", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),

  title: varchar("title").notNull(),
  order: integer("order").notNull(),
});
export const tasksTable = pgTable("tasks", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),

  title: varchar("title").notNull(),
  done: boolean("done").default(false).notNull(),
  sectionId: integer("sectionId")
    .references(() => sectionsTable.id, {
      onDelete: "cascade",
    })
    .notNull(),
});

// 3️⃣ Định nghĩa quan hệ (optional nhưng hữu ích)
export const sectionsRelations = relations(sectionsTable, ({ many }) => ({
  tasks: many(tasksTable),
}));

export const tasksRelations = relations(tasksTable, ({ one }) => ({
  section: one(sectionsTable, {
    fields: [tasksTable.sectionId],
    references: [sectionsTable.id],
  }),
}));
