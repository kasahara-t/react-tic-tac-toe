import { useHelp } from "@/common/hooks/useHelp";
import { cn } from "@/lib/utils";
import type { FC, HtmlHTMLAttributes } from "react";

export interface HelpOverlayProps extends HtmlHTMLAttributes<HTMLDivElement> {
  helpText?: string | React.ReactNode;
  borderRadius?: string;
}
export const HelpOverlay: FC<HelpOverlayProps> = ({
  children,
  className,
  helpText,
  borderRadius = "rounded-3xl",
  ...props
}) => {
  const { helpMode } = useHelp();

  return (
    <div className={cn("relative", className)} {...props}>
      {children}
      {helpMode && (
        <div
          className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10 ${borderRadius}`}
        >
          <p className="text-white text-xl text-center p-2.5">{helpText}</p>
        </div>
      )}
    </div>
  );
};

export default HelpOverlay;
