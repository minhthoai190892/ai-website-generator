"use client";
import { UserDetailContext } from "@/app/context/UserDetailContext";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { UserButton } from "@clerk/nextjs";
import { Sparkles } from "lucide-react";
import Link from "next/link";
import { useContext, useState } from "react";

export function WorkspaceAppSidebar() {
  const [projectList, setProjectList] = useState([]);
  const userDetail = useContext(UserDetailContext);
  if (!userDetail) {
    return;
  }
  console.log(userDetail);

  return (
    <Sidebar>
      <SidebarHeader className="mt-4">
        <div className="flex items-center gap-3">
          <Sparkles className="text-blue-500 size-10" />
          <h2 className="font-bold text-2xl">AI Website Builder</h2>
        </div>
        <Link href={"/workspace"} className="w-full mt-5">
          <Button className="w-full">+ Add New Project</Button>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="font-bold text-2xl">
            Projects
          </SidebarGroupLabel>
          {projectList.length === 0 && (
            <h2 className="text-sm text-gray-500">No Project Found</h2>
          )}
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter className="mt-3">
        <div className="p-3 border rounded-xl space-y-3 bg-secondary">
          <h2>
            Remaining Credits{" "}
            <span className="font-bold">{userDetail.userDetail?.credits}</span>
          </h2>
          <Progress value={33} />
          <Button className="w-full">Update to Unlimited</Button>
        </div>
        <div className="flex items-center justify-between">
          <UserButton />
          <Button variant={"ghost"}>Settings</Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
