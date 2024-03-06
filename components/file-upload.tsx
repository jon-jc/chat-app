"use client";

import { FileIcon, X } from "lucide-react";
import Image from "next/image";

import { UploadDropzone } from "@/lib/uploadthing";

interface FileUploadProps {
  onChange: (url?: string) => void;
  value: string;
  endpoint: "messageFile" | "serverImage";
}

export const FileUpload = ({ onChange, value, endpoint }: FileUploadProps) => {
  const fileType = value?.split(".").pop();

  if (value && fileType !== "pdf") {
    return (
      <div className="relative h-20 w-20">
        <Image fill src={value} alt="upload" className="rounded-full" />
        <button
          onClick={() => onChange("")}
          className="bg-slate-500 text-white p-1 rounded-full absolute top-0 right-0 shaodw-sm"
          type="button"
        ></button>
      </div>
    );
  }

  if (value && fileType === "pdf") {
    return (
      <div
        className="relative flex items-center p-2 mt-2 rounded-md
        bg-background/10"
      >
        <FileIcon className="h-10 w-10 fill-cyan-200 stroke-cyan-400" />
        <a
          href={value}
          target="_blank"
          rel="noreferrer noopener"
          className="ml-2 text-sm text-cyan-500 dark:text-cyan-400 hover:underline"
        >
          {value}
        </a>
        <button
          onClick={() => onChange("")}
          className="bg-slate-500 text-white p-1 rounded-full absolute -top-2 -right-2 shaodw-sm"
          type="button"
        >
          <X size={20} />
        </button>
      </div>
    );
  }

  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        onChange(res?.[0].url);
      }}
      onUploadError={(error: Error) => {
        console.log(error);
      }}
    />
  );
};
