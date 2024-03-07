import { HashIcon } from "lucide-react";

interface ChatWelcomeProps {
  name: string;
  type: "channel" | "conversation";
}

export const ChatWelcome = ({ name, type }: ChatWelcomeProps) => {
  return (
    <div className="space-y-2 px-4 mb-4">
      {type === "channel" && (
        <div
          className="h-[40px] w-[40px] rounded-full
            bg-slate-500 dark:bg-slate-700 flex items-center justify-center"
        >
          <HashIcon className="w-7 h-7 text-white" />
        </div>
      )}
      <p className="text-xl md:text-2xl font-bold">
        {type === "channel" ? "Welcome to #" : ""}
        {name}
      </p>
      <p className="text-slate-600 dark:text-slate-400 text-sm">
        {type === "channel"
          ? `This is the beginning of the #${name} channel.`
          : `This is the beginning of your conversation with ${name}.`}
      </p>
    </div>
  );
};

export default ChatWelcome;
