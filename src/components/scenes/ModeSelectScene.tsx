import { cn } from "@/lib/utils";
import type { FC } from "react";
import { AppBackground } from "../ui/AppBackground";
import { Button } from "../ui/Button";

export const ModeSelectScene: FC = () => {
  return (
    <AppBackground>
      <div className={cn("flex flex-col gap-4")}>
        <h1 className={cn("text-4xl")}>Select a mode</h1>
        <div className={cn("flex flex-col gap-2")}>
          <Button variant="panel">Single player</Button>
          <Button variant="panel">Multi player</Button>
        </div>
      </div>
    </AppBackground>
  );
};
