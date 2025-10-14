"use client";
import { Button } from "@/components/ui/button";
import { ArrowUp, icons, ImagePlus } from "lucide-react";
import React, { useState } from "react";
import { suggestion } from "../utils/SuggestionOption";
import { SignInButton } from "@clerk/nextjs";

export default function Hero() {
  const [userInput, setUserInput] = useState<string>();
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
          <SignInButton mode="modal" forceRedirectUrl={"/workspace"}>
            <Button disabled={!userInput}>
              <ArrowUp />
            </Button>
          </SignInButton>
        </div>
      </div>
      {/* suggestion list */}
      <div className="mt-4 flex gap-3">
        {suggestion.map((element, index) => (
          <Button
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
