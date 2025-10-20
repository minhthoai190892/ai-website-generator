"use client";
import React, { useEffect, useState } from "react";
import PlaygroundHeader from "../_components/PlaygroundHeader";
import ChatSession from "../_components/ChatSession";
import WebsiteDesign from "../_components/WebsiteDesign";
import ElementSettingSession from "../_components/ElementSettingSession";
import { useParams, useSearchParams } from "next/navigation";
import axios from "axios";
import { FrameType } from "../utils/FrameType";

export default function Playground() {
  const projectId = useParams();
  const params = useSearchParams();
  const frameId = params.get("frameId");
  const [frameDetail, setFrameDetail] = useState<FrameType>();

  console.log(projectId.projectId);
  const getFrameDetails = async () => {
    const result = await axios.get(
      `/api/frames?frameId=${frameId}&projectId=${projectId.projectId}`
    );
    setFrameDetail(result.data);
  };
  const sendMessage = (userInput: string) => {
    console.log("Send Message ", userInput);
  };
  useEffect(() => {
    frameId && getFrameDetails();
  }, [frameId]);

  return (
    <div>
      <PlaygroundHeader />
      <div className="flex">
        {/* chat session */}
        <ChatSession
          messages={frameDetail?.chatMessages ?? []}
          sendMessage={sendMessage}
        />
        {/* Website design */}
        <WebsiteDesign />
        {/* setting session */}
        <ElementSettingSession />
      </div>
    </div>
  );
}
