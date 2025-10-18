"use client";
import React from "react";
import PlaygroundHeader from "../_components/PlaygroundHeader";
import ChatSession from "../_components/ChatSession";
import WebsiteDesign from "../_components/WebsiteDesign";
import ElementSettingSession from "../_components/ElementSettingSession";
import { useParams, useSearchParams } from "next/navigation";

export default function Playground() {
  const projectId = useParams();
  const params = useSearchParams();
  const frameId = params.get("frameId");
  console.log(frameId);

  return (
    <div>
      <PlaygroundHeader />
      <div className="flex">
        {/* chat session */}
        <ChatSession />
        {/* Website design */}
        <WebsiteDesign />
        {/* setting session */}
        <ElementSettingSession />
      </div>
    </div>
  );
}
