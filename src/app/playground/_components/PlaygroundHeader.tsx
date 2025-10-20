import { Button } from "@/components/ui/button";
import { Sparkle } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function PlaygroundHeader() {
  return (
    <div className="flex justify-between items-center p-5 shadow-xl">
     <Link href={`/`}> <Sparkle /></Link>
      <Button>Save</Button>
    </div>
  );
}
