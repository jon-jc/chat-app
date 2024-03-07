"use client";

import { Member, Profile } from "@prisma/client";
import UserAvatar from "../user-avatar";
import { ActionTootip } from "../action-tooltip";
import { ShieldPlusIcon } from "lucide-react";
import { BadgeCheckIcon } from "lucide-react";

interface ChatItemProps {
  id: string;
  content: string;
  member: Member & {
    profile: Profile;
  };
  timestamp: string;
  fileUrl: string | null;
  deleted: boolean;
  currentMember: Member;
  isUpdated: boolean;
  socketUrl: string;
  socketQuery: Record<string, string>;
}

const roleIconMap = {
  GUEST: null,
  MODERATOR: <ShieldPlusIcon className="h-5 w-5 ml-2 text-emerald-500" />,
  ADMIN: <BadgeCheckIcon className="h-5 w-5 ml-2 text-cyan-500" />,
};

export const ChatItem = ({
  id,
  content,
  member,
  timestamp,
  fileUrl,
  deleted,
  currentMember,
  isUpdated,
  socketUrl,
  socketQuery,
}: ChatItemProps) => {
  return (
    <div className="relative group flex items-center hover: bg-black/5 p-4 transition w-full">
      <div className="group flex gap-x-2 items-start w-full">
        <div className="cursor-pointer hover:drop-shadow-md transition">
          <UserAvatar src={member.profile.imageUrl} />
        </div>
        <div className="flex flex-col w-full">
          <div className="flex items-center gap-x-2">
            <div className="flex items-center">
              <p className="font-semibold text-sm hover:underline cursor-pointer">
                {member.profile.name}
              </p>
              <ActionTootip label={member.role}>
                {roleIconMap[member.role]}
              </ActionTootip>
            </div>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              {timestamp}
            </span>
          </div>
          {content}
        </div>
      </div>
    </div>
  );
};

export default ChatItem;
