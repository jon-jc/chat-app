"use client";

import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

export const LandingHero = () => {
  const words = [
    {
      text: "Connect",
    },
    {
      text: "Beyond",
    },
    {
      text: "Borders",
    },
    {
      text: "with",
    },
    {
      text: "EchoTalk.",
      className: "text-sky-500 dark:text-sky-500",
    },
  ];

  return (
    <div className="text-white font-bold py-36 text-center space-y-5">
      <div className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>The Best Chatting Platform</h1>
        <div className="flex flex-col items-center justify-center text-2xl">
          <TypewriterEffectSmooth words={words} />
        </div>
      </div>
      <div className="text-sm md:text-xl font-light text-zinc-400">
        Your new go-to platform for seamless communication and collaboration.
      </div>
    </div>
  );
};
