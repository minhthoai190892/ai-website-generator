import { Button } from "@/components/ui/button";
import { Sparkle } from "lucide-react";
import React from "react";

export default function PlaygroundHeader() {
  return (
    <div className="flex justify-between items-center p-5 shadow-xl">
      <Sparkle />
      <Button>Save</Button>
    </div>
  );
}
