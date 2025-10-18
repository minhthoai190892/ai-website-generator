import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";
import { WorkspaceAppSidebar } from "./_components/WorkspaceAppSidebar";
import WorkspaceHeader from "./_components/WorkspaceHeader";
interface WorkspaceLayoutType {
  children: React.ReactNode;
}
export default function WorkspaceLayout({ children }: WorkspaceLayoutType) {
  return (
    <SidebarProvider>
      {/* App sidebar */}
      <WorkspaceAppSidebar />
      <main className="w-full">
        <WorkspaceHeader />
        {children}
      </main>
    </SidebarProvider>
  );
}
