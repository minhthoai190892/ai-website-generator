import Image from "next/image";
import React from "react";
import { MenuOption } from "../utils/MenuOption";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Header() {
  return (
    <div className="flex justify-between items-center gap-4 w-full shadow p-2 " style={{
      background:"var(--neutral)"
    }}>
      {/* logo */}
      <div className="flex items-center w-[200px] justify-center gap-2 ">
        <p className="font-bold text-3xl">Logo</p>
        <h2 className="font-bold ">AI Website Generator</h2>
      </div>
      {/* menu option */}
      <div>
        {MenuOption.map((element, index) => (
          <Button key={index} className="bg-secondary mx-2" variant={"ghost"}>
            <p
              className=""
              style={{
                color: "var(--text-secondary-text)",
              }}
            >
              {element.name}
            </p>
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
