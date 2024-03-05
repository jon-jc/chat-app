"use client";
import { cn } from "@/lib/utils";
import { Channel, Server, MemberRole, ChannelType } from "@prisma/client";
import { Edit2, HashIcon, Lock, Mic, Trash2, Video } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { ActionTootip } from "../action-tooltip";

interface ServerChannelProps {
  channel: Channel;
  server: Server;
  role?: MemberRole;
}

const iconMap = {
  [ChannelType.TEXT]: HashIcon,
  [ChannelType.AUDIO]: Mic,
  [ChannelType.VIDEO]: Video,
};

export const ServerChannel = ({
  channel,
  server,
  role,
}: ServerChannelProps) => {
  const params = useParams();
  const router = useRouter();

  const Icon = iconMap[channel.type];

  return (
    <button
      onClick={() => {}}
      className={cn(
        "group px-2 py-2 rounded-md flex items-center gap-x-2 w-full hover:bg-slate-700/10 dark:hover:bg-slate-700/50 transition mb-1",
        params?.channelId === channel.id && "bg-slate-700/20 dark:bg-slate-700"
      )}
    >
      <Icon className="flex-shrink-0 w-5 h-5 text-slate-500 dark:text-slate-400" />
      <p
        className={cn(
          "line-clamp-1 font-semibold text-sm text-slate-500 dark:text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition",
          params?.channelId === channel.id &&
            "text-primary dark:text-slate-200 dark:group-hover:text-white"
        )}
      >
        {channel.name}
      </p>
      {channel.name !== "general" && role !== MemberRole.GUEST && (
        <div className="ml-auto flex items-center gap-x-2">
          <ActionTootip label="Edit">
            <Edit2
              className="hidden group-hover:block w-4 h-4 text-slate-500
            hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300 transition"
            />
          </ActionTootip>
          <ActionTootip label="Delete">
            <Trash2
              className="hidden group-hover:block w-4 h-4 text-slate-500
            hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300 transition"
            />
          </ActionTootip>
        </div>
      )}
      {channel.name === "general" && (
        <Lock className="ml-auto w-3 h-3 text-slate-500 dark:text-slate-400" />
      )}
    </button>
  );
};
