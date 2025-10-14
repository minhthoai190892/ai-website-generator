import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { eq } from "drizzle-orm";
import { sectionsTable, tasksTable, usersTable } from "./db/schema";

export const db = drizzle(process.env.NEXT_PUBLIC_DATABASE_URL!);

async function main() {
  const user: typeof usersTable.$inferInsert = {
    name: "John",
    age: 30,
    email: "john@example.com",
  };

  await db.insert(usersTable).values(user);
  console.log("New user created!");

  const users = await db.select().from(usersTable);
  console.log("Getting all users from the database: ", users);
  /*
  const users: {
    id: number;
    name: string;
    age: number;
    email: string;
  }[]
  */

  await db
    .update(usersTable)
    .set({
      age: 31,
    })
    .where(eq(usersTable.email, user.email));
  console.log("User info updated!");

  //   await db.delete(usersTable).where(eq(usersTable.email, user.email));
  console.log("User deleted!");

  const section1 = await db
    .insert(sectionsTable)
    .values({
      title: "Section 1",
      order: 1,
    })
    .returning();
  const task1 = await db.insert(tasksTable).values({
    title: "task 1 of section 1",
    done: false,
    sectionId: section1[0].id,
  });
}

// main();
