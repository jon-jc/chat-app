"use client";

import { ServerWithMembersWithProfiles } from "@/types";
import { ChannelType, MemberRole } from "@prisma/client";
import { ActionTootip } from "../action-tooltip";
import { PlusCircleIcon, Settings2 } from "lucide-react";
import { useModal } from "@/hooks/use-modal-store";

interface ServerSectionProps {
  label: string;
  role?: MemberRole;
  sectionType: "channels" | "members";
  channelType?: ChannelType;
  server?: ServerWithMembersWithProfiles;
}

export const ServerSection = ({
  label,
  role,
  sectionType,
  channelType,
  server,
}: ServerSectionProps) => {
  const { onOpen } = useModal();
  return (
    <div className="flex items-center justify-between py-2">
      <p className="text-xs uppercase font-semibold text-slate-500 dark:text-slate-400">
        {label}
      </p>
      {role !== MemberRole.GUEST && sectionType === "channels" && (
        <ActionTootip label="Create Channel" side="top">
          <button
            onClick={() => onOpen("createChannel")}
            className="text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 transition"
          >
            <PlusCircleIcon className="w-5 h-5" />
          </button>
        </ActionTootip>
      )}
      {role === MemberRole.ADMIN && sectionType === "members" && (
        <ActionTootip label="Create Channel" side="top">
          <button
            onClick={() => onOpen("members", { server })}
            className="text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 transition"
          >
            <Settings2 className="w-5 h-5" />
          </button>
        </ActionTootip>
      )}
    </div>
  );
};

export default ServerSection;
