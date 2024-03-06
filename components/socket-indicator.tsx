"use client";

import { useSocket } from "@/components/providers/socket-provider";
import { Badge } from "@/components/ui/badge";

export const SocketIndicator = () => {
  const { isConnected } = useSocket();

  if (!isConnected) {
    return (
      <Badge variant="outline" className="bg-red-600 text-white border-none">
        Offline
      </Badge>
    );
  }

  return (
    <Badge variant="outline" className="bg-cyan-600 text-white border-none">
      Online: Live Updates
    </Badge>
  );
};
