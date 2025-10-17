import { SidebarTrigger } from "@/components/ui/sidebar";
import { UserButton } from "@clerk/nextjs";
import React from "react";

export default function WorkspaceHeader() {
  return (
    <div className="w-full flex justify-between item-center p-4 shadow-xl">
      <SidebarTrigger />
      <UserButton />
    </div>
  );
}
