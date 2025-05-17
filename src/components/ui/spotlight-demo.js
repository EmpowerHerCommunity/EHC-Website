import React from "react";
import { cn } from "../../utils/index";
import { Spotlight } from "./spotlight";

export default function SpotlightDemo() {
  return (
    <div className="relative flex h-full w-full min-h-[300px] sm:min-h-[350px] md:min-h-[400px] overflow-hidden rounded-md bg-black/[0.6] backdrop-blur-xl antialiased md:items-center md:justify-center">
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
      <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-8 md:pt-0 flex flex-col items-center justify-center">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-8">
          Best Team Member Award
        </h1>
        
        {/* Container for image and text - flex column on mobile, row on larger screens */}
        <div className="flex flex-col sm:flex-row items-center sm:items-center gap-6 sm:gap-8 md:gap-10 w-full justify-center">
          {/* Circular Image with Glass Background and Border */}
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 flex-shrink-0">
            {/* Glass effect background */}
            <div className="absolute inset-0 rounded-full bg-white/20 backdrop-blur-lg border border-fuchsia-300/30" />
            {/* Profile image */}
            <img
              src="/team-images/anita.png"
              alt="Anita Kim"
              className="relative h-full w-full object-cover rounded-full"
            />
          </div>
          
          {/* Name and Position - text aligned left when beside image */}
          <div className="sm:text-left flex flex-col justify-center py-4">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-2 md:mb-3">Anita Kim</h2>
            <p className="text-base md:text-lg lg:text-xl text-white/90 block">Lead Communications</p>
          </div>
        </div>
      </div>
    </div>
  );
}

import { cn } from "../../utils/index";

export const Spotlight = ({ className, fill }) => {
  return (
    <svg
      className={cn(
        "animate-spotlight pointer-events-none absolute z-[1] h-[169%] w-[138%] lg:w-[84%] opacity-0",
        className
      )}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3787 2842"
      fill="none"
    >
      <g filter="url(#filter)">
        <ellipse
          cx="1924.71"
          cy="273.501"
          rx="1924.71"
          ry="273.501"
          transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
          fill={fill || "white"}
          fillOpacity="0.21"
        ></ellipse>
      </g>
      <defs>
        <filter
          id="filter"
          x="0.860352"
          y="0.838989"
          width="3785.16"
          height="2840.26"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            stdDeviation="151"
            result="effect1_foregroundBlur_1065_8"
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
};