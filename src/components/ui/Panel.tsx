import { cn } from "@/lib/utils";
import type { FC } from "react";
import { HelpOverlay, type HelpOverlayProps } from "./HelpOverlay";

export interface PanelProps extends Omit<HelpOverlayProps, "borderRadius"> {}

export const Panel: FC<PanelProps> = ({ className, ...props }) => {
  return (
    <HelpOverlay
      className={cn(
        "rounded-3xl bg-black bg-opacity-30 shadow-custom backdrop-blur",
        className,
      )}
      {...props}
    />
  );
};
