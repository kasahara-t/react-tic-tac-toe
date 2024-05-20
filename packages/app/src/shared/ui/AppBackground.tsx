import { cn } from "@/shared/utils/helpers";
import type { FC } from "react";

export interface AppBackgroundProps {
  children: React.ReactNode;
}
export const AppBackground: FC<AppBackgroundProps> = ({ children }) => {
  return (
    <div
      className={cn(
        "overflow-hidden absolute inset-0",
        "flex flex-col justify-center items-center",
        "text-white bg-dark-gradient",
      )}
    >
      {children}
    </div>
  );
};
