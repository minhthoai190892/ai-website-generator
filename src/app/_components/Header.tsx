import Image from "next/image";
import React from "react";
import { MenuOption } from "../utils/MenuOption";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Header() {
  return (
    <div className="flex justify-between items-center gap-4 w-full">
      {/* logo */}
      <div className="flex items-center w-[200px] justify-center gap-2">
        <p className="font-bold text-3xl">Logo</p>
        <h2 className="font-bold ">AI Website Generator</h2>
      </div>
      {/* menu option */}
      <div>
        {MenuOption.map((element, index) => (
          <Button
            key={index}
            className="text-primary-text bg-secondary mx-2"
            variant={"ghost"}
          >
            {element.name}
          </Button>
        ))}
      </div>
      {/* get started button */}
      <div>
        <Button>
          Get Started <ArrowRight />
        </Button>
      </div>
    </div>
  );
}
