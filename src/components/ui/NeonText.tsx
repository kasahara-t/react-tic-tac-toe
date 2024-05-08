import { Slot } from "@radix-ui/react-slot";
import { type HtmlHTMLAttributes, forwardRef } from "react";

export interface NeonTextProps
  extends HtmlHTMLAttributes<HTMLParagraphElement> {
  asChild?: boolean;
}
export const NeonText = forwardRef<HTMLParagraphElement, NeonTextProps>(
  ({ asChild = false, style, ...props }, ref) => {
    const Comp = asChild ? Slot : "p";
    return (
      <Comp
        style={{
          textShadow: `
        0 0 5px #DB00FF, 
        0 0 10px #DB00FF
      `,
          ...style,
        }}
        {...props}
        ref={ref}
      />
    );
  },
);
NeonText.displayName = "NeonText";