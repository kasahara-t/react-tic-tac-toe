import { cn } from "@/lib/utils";
import { type FC, useState } from "react";

export interface HelpOverlayProps {
  children: React.ReactNode;
  helpText: string | React.ReactNode;
  className?: string;
  borderRadius?: string;
}
export const HelpOverlay: FC<HelpOverlayProps> = ({
  children,
  helpText,
  className,
  borderRadius = "rounded-3xl",
}) => {
  const [showHelp] = useState(false);

  return (
    <div className={cn("relative", className, showHelp ? "help-active" : "")}>
      {children}
      {showHelp && (
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
