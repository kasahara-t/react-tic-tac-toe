import settingImageUrl from "@/components/assets/setting.png";
import { BaseButton } from "@/components/ui/BaseButton";
import type { FC } from "react";

export const SettingButton: FC = () => {
  const handleButtonClick = () => {
    alert("setting is not implement!");
  };
  return <BaseButton imgPath={settingImageUrl} onClick={handleButtonClick} />;
};
