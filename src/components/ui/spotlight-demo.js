
// File: components/ui/spotlight-demo.jsx
import React from "react";
import { cn } from "../../utils/index";
import { Spotlight } from "./spotlight";

export default function SpotlightDemo() {
  return (
    <div className="relative flex h-full w-full overflow-hidden rounded-md bg-black/[0.6] backdrop-blur-xl antialiased md:items-center md:justify-center">
      {/* Grid overlay */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)]",
        )}
      />
      {/* First spotlight at top left */}
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-20"
        fill="#d946ef" // Fuchsia color to match the countdown theme
      />
      {/* Second spotlight at top right */}
      <Spotlight
        className="-top-40 left-auto right-0 md:-top-20 md:left-auto md:right-20"
        fill="#d946ef" // Fuchsia color to match the countdown theme
      />
      <div className="relative z-10 mx-auto w-full max-w-7xl p-2 md:p-4 pt-12 md:pt-0 flex flex-col items-center text-center">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-8">
          Best Team Member Award
        </h1>
        
        {/* Container for image and text - flex column on mobile, row on larger screens */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 md:gap-8">
          {/* Circular Image with Glass Background and Border */}
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56">
            {/* Glass effect background */}
            <div className="absolute inset-0 rounded-full bg-white/20 backdrop-blur-lg border border-fuchsia-300/30" />
            {/* Profile image */}
            <img
              src="./public/anita.png"
              alt="Anita Kim"
              className="relative h-full w-full object-cover rounded-full"
            />
          </div>
          
          {/* Name and Position - text aligned left when beside image */}
          <div className="sm:text-left flex flex-col justify-center">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-1 md:mb-3">Anita Kim</h2>
            <p className="text-base md:text-lg lg:text-xl text-white/80 block">Lead Communications</p>
          </div>
        </div>
      </div>
    </div>
  );
}