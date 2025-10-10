import { relations } from "drizzle-orm";
import { boolean, integer, pgTable, varchar } from "drizzle-orm/pg-core";
export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  credits: integer().default(2).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
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
