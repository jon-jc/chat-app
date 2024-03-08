"use client";

import qs from "query-string";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { Video, VideoOff } from "lucide-react";

import { ActionTootip } from "../action-tooltip";

export const ChatVideoButton = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const isVideo = searchParams?.get("video");

  const onClick = () => {
    const url = qs.stringifyUrl(
      {
        url: pathname || "",
        query: {
          video: isVideo ? undefined : true,
        },
      },
      { skipNull: true }
    );
    router.push(url);
  };

  const Icon = isVideo ? VideoOff : Video;
  const tooltipLabel = isVideo ? "End Video Call" : "Start Video Call";
  return (
    <ActionTootip side="bottom" label={tooltipLabel}>
      <button onClick={onClick} className="hover:opacity-75 transition mr-4">
        <Icon className="w-6 h-6 text-slate-500 dark:text-slate-400" />
      </button>
    </ActionTootip>
  );
};
