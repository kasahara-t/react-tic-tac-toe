import type { FC } from "react";
import { cn } from "@/lib/utils";

export const LogPanel: FC = () => {
  return (
    <div className={cn(
      "w-72 h-full rounded-3xl",
      "bg-black bg-opacity-30 shadow-custom"
    )}>
      <h3 className={cn(
        "text-3xl flex mt-6 justify-center items-center"
      )}>
        Log
      </h3>
    </div>
  );
};