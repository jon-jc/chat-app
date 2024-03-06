import { HashIcon } from "lucide-react";

import React from "react";
import MobileToggle from "../mobile-toggle";

interface ChatHeaderProps {
  serverId: string;
  name: string;
  type: "channel" | "conversation";
  imageUrl?: string;
}

export const ChatHeader = ({
  serverId,
  name,
  type,
  imageUrl,
}: ChatHeaderProps) => {
  return (
    <div
      className="text-md font-semibold
    px-3 flex items-center h-12 border-neutral-200 dark:border-neutral-800 border-b-2"
    >
      <MobileToggle serverId={serverId} />
      {type === "channel" && (
        <HashIcon className="w-5 h-5 text-slate-500 dark:text-slate-400 mr-2" />
      )}
      <p className="font-semibold text-md text-black dark:text-white">{name}</p>
    </div>
  );
};

export default ChatHeader;
