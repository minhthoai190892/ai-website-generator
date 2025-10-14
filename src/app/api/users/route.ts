import { usersTable } from "@/db/schema";
import { db } from "@/index";
import { currentUser } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const user = await currentUser();
  if (!user || !user.primaryEmailAddress?.emailAddress) {
    return NextResponse.json({
      success: false,
      message: "Email is required",
    });
  }
  const userResult = await db
    .select()
    .from(usersTable)

    .where(eq(usersTable.email, user?.primaryEmailAddress?.emailAddress));
  if (userResult.length === 0) {
    const data = {
      name: user.fullName ?? "NA",
      email: user.primaryEmailAddress.emailAddress,
      credits: 2,
    };
    const result = await db.insert(usersTable).values({ ...data });
    return NextResponse.json({
      success: true,
      message: "Success",
      user: result,
    });
  }
  return NextResponse.json({
    success: true,
    message: "Success",
    user: userResult[0],
  });
}
