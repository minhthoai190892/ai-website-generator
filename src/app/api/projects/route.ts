import { chatTable, frameTable, projectTable } from "@/db/schema";
import { db } from "@/index";
import { currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { projectId, frameId, messages } = await req.json();
  const user = await currentUser();
  if (!user || !user.primaryEmailAddress?.emailAddress) {
    return NextResponse.json({
      success: false,
      message: "Email is required",
    });
  }
  //   create project
  const projectResult = await db.insert(projectTable).values({
    projectId: projectId,
    createBy: user?.primaryEmailAddress?.emailAddress,
  });
  // create frame
  const frameResult = await db.insert(frameTable).values({
    frameId: frameId,
    projectId: projectId,
  });
  // save user msg
  const chatResult = await db.insert(chatTable).values({
    chatMessage: messages,
    createBy: user.primaryEmailAddress.emailAddress,
  });
  return NextResponse.json({
    projectId,
    frameId,
    messages,
  });
}
