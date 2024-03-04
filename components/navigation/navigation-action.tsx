"use client";
import { Plus } from "lucide-react";

import { ActionTootip } from "@/components/action-tooltip";

export const NavigationAction = () => {
  return (
    <div>
      <ActionTootip side="right" align="center" label="Create server">
        <button className="group flex items-center">
          <div
            className="flex mx-3 h-[60px] w-[60px] rounded-[30px] group-hover:rounded-[16px] transition-all
            overflow-hidden items-center justify-center bg-background dark:bg-neutral-700 group-hover:bg-cyan-500"
          >
            <Plus
              className="group-hover:text-white transition text-cyan-500"
              size={30}
            />
          </div>
        </button>
      </ActionTootip>
    </div>
  );
};
