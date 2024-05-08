import { useHelp } from "@/common/hooks/useHelp";
import { cn } from "@/lib/utils";
import { type FC, type HtmlHTMLAttributes, forwardRef } from "react";

export interface HelpOverlayProps extends HtmlHTMLAttributes<HTMLDivElement> {
  helpText?: string | React.ReactNode;
  borderRadius?: string;
}
export const HelpOverlay = forwardRef<HTMLDivElement, HelpOverlayProps>(
  (
    { children, className, helpText, borderRadius = "rounded-3xl", ...props },
    ref,
  ) => {
    const { helpMode } = useHelp();

    return (
      <div className={cn("relative", className)} {...props} ref={ref}>
        {children}
        {helpMode && (
          <div
            className={cn(
              "absolute inset-0 bg-black bg-opacity-70",
              "flex items-center justify-center z-10 p-4",
              "text-center",
              borderRadius,
            )}
          >
            {helpText}
          </div>
        )}
      </div>
    );
  },
);
HelpOverlay.displayName = "HelpOverlay";
