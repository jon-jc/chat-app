"use client";

import { MemberRole, Server } from "@prisma/client";
import { ServerWithMembersWithProfiles } from "@/types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  ArrowDown,
  ChevronDown,
  LogOutIcon,
  Plus,
  PlusCircleIcon,
  Settings2,
  TrashIcon,
  Users2Icon,
} from "lucide-react";

interface ServerHeaderProps {
  server: Server;
  role?: MemberRole;
}

export const ServerHeader = ({ server, role }: ServerHeaderProps) => {
  const isAdmin = role === MemberRole.ADMIN;
  const isModerator = isAdmin || role === MemberRole.MODERATOR;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none" asChild>
        <button
          className="w-full text-md font-bold px-3 flex items-center h-12
         border-neutral-200 dark:border-neutral-800 border-b-2 hover:bg-slate-700/10
         dark:hover:bg-slate-700/50 transition"
        >
          {server.name}
          <ArrowDown className="w-5 h-5 ml-auto" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 text-xs font-medium text-black dark:text-neutral-400 space-y-[2px]">
        {isModerator && (
          <DropdownMenuItem
            className="text-cyan-700 dark:text-cyan-500
          py-2 px-3 text-sm cursor-pointer"
          >
            <Plus className="w-4 h-4 mr-auto" />
            Invite users
          </DropdownMenuItem>
        )}
        {isAdmin && (
          <DropdownMenuItem className="py-2 px-3 text-sm cursor-pointer">
            <Settings2 className="w-4 h-4 mr-auto" />
            Server Settings
          </DropdownMenuItem>
        )}
        {isAdmin && (
          <DropdownMenuItem className="py-2 px-3 text-sm cursor-pointer">
            <Users2Icon className="w-4 h-4 mr-auto" />
            Manage Members
          </DropdownMenuItem>
        )}
        {isModerator && (
          <DropdownMenuItem className="py-2 px-3 text-sm cursor-pointer">
            <PlusCircleIcon className="w-4 h-4 mr-auto" />
            Create new Channel
          </DropdownMenuItem>
        )}
        {isModerator && <DropdownMenuSeparator />}
        {isAdmin && (
          <DropdownMenuItem className="py-2 px-3 text-sm cursor-pointer text-rose-900">
            <TrashIcon className="w-4 h-4 mr-auto" />
            Delete Server
          </DropdownMenuItem>
        )}
        {!isAdmin && (
          <DropdownMenuItem className="py-2 px-3 text-sm cursor-pointer text-rose-900">
            <LogOutIcon className="w-4 h-4 mr-auto" />
            Leave Server
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
