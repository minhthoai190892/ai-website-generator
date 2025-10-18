"use client";
import { Button } from "@/components/ui/button";
import { ArrowUp, icons, ImagePlus, Loader } from "lucide-react";
import React, { useState } from "react";
import { suggestion } from "../utils/SuggestionOption";
import { SignInButton, useUser } from "@clerk/nextjs";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";

export default function Hero() {
  const [userInput, setUserInput] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const { user } = useUser();
  const router = useRouter();
  const createNewUser = async () => {
    const projectId = uuidv4();
    const frameId = generateRandomFrameNumber();
    const messages = [
      {
        role: "user",
        content: userInput,
      },
    ];
    try {
      setLoading(true);
      const result = await axios.post("/api/projects", {
        projectId: projectId,
        frameId: frameId,
        messages: messages,
      });
      router.push(
        `/playground/${result.data.projectId}?frameId=${result.data.frameId}`
      );
      console.log(result.data);
      setLoading(false);
    } catch (error) {
      setLoading(true);
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col items-center h-[80vh] justify-center">
      {/* Header & description */}
      <h2 className="font-bold text-6xl text-primary-text">
        What should we design
      </h2>
      <p className="mt-2 text-xl text-secondary-text">
        Generate, Edit and Explore design with AI, Export code as well
      </p>
      {/* input box */}
      <div className="w-full max-w-xl border mt-2 rounded-2xl ">
        <textarea
          value={userInput}
          onChange={(event) => setUserInput(event.target.value)}
          name=""
          id=""
          placeholder="Describe your page design"
          className="w-full h-24 focus:outline-none focus:ring-0 p-2 resize-none"
        ></textarea>
        <div className="flex justify-between items-center p-2">
          <Button variant={"ghost"} size={"icon"}>
            <ImagePlus />
          </Button>
          {!user ? (
            <SignInButton mode="modal" forceRedirectUrl={"/workspace"}>
              <Button disabled={!userInput} className="cursor-pointer">
                <ArrowUp />
              </Button>
            </SignInButton>
          ) : (
            <Button
              disabled={!userInput}
              onClick={createNewUser}
              className="cursor-pointer"
            >
              {!loading ? <ArrowUp /> : <Loader className="animate-spin " />}
            </Button>
          )}
        </div>
      </div>
      {/* suggestion list */}
      <div className="mt-4 flex gap-3">
        {suggestion.map((element, index) => (
          <Button
            className="cursor-pointer"
            key={index}
            variant={"outline"}
            onClick={() => setUserInput(element.prompt)}
          >
            <element.icon />
            {element.label}
          </Button>
        ))}
      </div>
    </div>
  );
}

const generateRandomFrameNumber = () => {
  const num = Math.floor(Math.random() * 10000);
  return num.toString();
};
