
// File: components/ui/spotlight-demo.jsx
import React from "react";
import { cn } from "../../../utils/index";
import { Spotlight } from "./spotlight";

export default function SpotlightPreview() {
  return (
    <div className="relative flex h-[40rem] w-full overflow-hidden rounded-md bg-black/[0.96] antialiased md:items-center md:justify-center">
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
        )}
      />
      {/* First spotlight at top left */}
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-20"
        fill="white"
      />
      {/* Second spotlight at top right */}
      <Spotlight
        className="-top-40 right-0 md:-top-20 md:right-20"
        fill="white"
      />
      <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0 flex flex-col items-center">
        <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl mb-8">
          Spotlight <br /> is the new trend.
        </h1>
        
        {/* Image at the center instead of text */}
        <div className="w-full max-w-lg h-64 mx-auto mb-8 relative">
          <img 
            src="/api/placeholder/600/400" 
            alt="Featured content" 
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}