import { cn } from "@/lib/utils";
import type { FC } from "react";

export interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Panel: FC<PanelProps> = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        "rounded-3xl bg-black bg-opacity-30 shadow-custom backdrop-blur",
        className,
      )}
      {...props}
    />
  );
};
