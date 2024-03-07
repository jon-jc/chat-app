"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import qs from "query-string";
import axios from "axios";
import * as z from "zod";
import { Member, MemberRole, Profile } from "@prisma/client";
import UserAvatar from "../user-avatar";
import { ActionTootip } from "../action-tooltip";
import { Edit2Icon, ShieldPlusIcon, Trash2Icon, X } from "lucide-react";
import { BadgeCheckIcon } from "lucide-react";
import Image from "next/image";
import { FileIcon } from "lucide-react";
import { use, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

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

const formSchema = z.object({
  content: z.string().min(1),
});

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
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: any) => {
      if (e.key === "Escape" || e.keyCode === 27) {
        setIsEditing(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: content,
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const url = qs.stringifyUrl({
        url: `${socketUrl}/${id}`,
        query: socketQuery,
      });

      await axios.patch(url, values);
      form.reset();
      setIsEditing(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    form.reset({
      content: content,
    });
  }, [content]);

  const fileType = fileUrl?.split(".").pop();
  const isAdmin = currentMember.role === MemberRole.ADMIN;
  const isModerator = currentMember.role === MemberRole.MODERATOR;
  const isOwner = currentMember.id === member.id;
  const canDeleteMessage = !deleted && (isAdmin || isOwner);
  const canEditMessage = !deleted && isOwner && !fileUrl;
  const isPDF = fileType === "pdf" && fileUrl;
  const isImage = !isPDF && fileUrl;
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
          {isImage && (
            <a
              href={fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square rounded-md overflow-hidden mt-2 border flex items-center bg-secondary w-48 h-48"
            >
              <Image
                src={fileUrl}
                alt={content}
                fill
                className="object-cover"
              />
            </a>
          )}
          {isPDF && (
            <div className="">
              <div
                className="relative flex items-center p-2 mt-2 rounded-md
        bg-background/10"
              >
                <FileIcon className="h-10 w-10 fill-cyan-200 stroke-cyan-400" />
                <a
                  href={fileUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="ml-2 text-sm text-cyan-500 dark:text-cyan-400 hover:underline"
                >
                  PDF file
                </a>
              </div>
            </div>
          )}
          {!fileUrl && !isEditing && (
            <p
              className={cn(
                "text-md text-slate-600 dark:text-slate-300",
                deleted &&
                  "italic text-slate-500 dark:text-slate-400 text-xs mt-1"
              )}
            >
              {content}
              {isUpdated && !deleted && (
                <span className="text-[10px] mx-2 text-slate-500 dark:text-slate-400">
                  (edited)
                </span>
              )}
            </p>
          )}
          {!fileUrl && isEditing && (
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex items-center gap-x-2 pt-2 w-full"
              >
                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormControl>
                        <div className="relative w-full">
                          <Input
                            disabled={isLoading}
                            className="p-2 bg-slate-200/90 dark:bg-slate-700/75 border-none
                          border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-slate-600
                          dark:text-slate-200"
                            placeholder="Edited message"
                            {...field}
                          />
                        </div>
                      </FormControl>
                    </FormItem>
                  )}
                />
                <Button disabled={isLoading} size="sm" variant="primary">
                  Save
                </Button>
              </form>
              <span className="text-[10px] mt-1 text-slate-400">
                Press ESC to cancel or Enter to save
              </span>
            </Form>
          )}
        </div>
      </div>
      {canDeleteMessage && (
        <div
          className="hidden group-hover:flex items-center gap-x-2
        absolute p-1 -top-2 right-5 bg-white dark:bg-slate-900 border rounded-sm"
        >
          {canEditMessage && (
            <ActionTootip label="Edit">
              <Edit2Icon
                onClick={() => setIsEditing(true)}
                className="cursor-pointer ml-auto w-4 h-4 text-slate-500 hover:text-slate-700 
              dark:hover:text-slate-300 transition"
              />
            </ActionTootip>
          )}
          <ActionTootip label="Delete">
            <Trash2Icon
              className="cursor-pointer ml-auto w-4 h-4 text-slate-500 hover:text-slate-700 
              dark:hover:text-slate-300 transition"
            />
          </ActionTootip>
        </div>
      )}
    </div>
  );
};

export default ChatItem;
