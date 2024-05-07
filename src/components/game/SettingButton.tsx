import settingImageUrl from "@/components/assets/setting.png";
import { ImageButton } from "@/components/ui/ImageButton";
import type { FC } from "react";

export const SettingButton: FC = () => {
  const handleButtonClick = () => {
    alert("setting is not implement!");
  };
  return (
    <ImageButton
      imgPath={settingImageUrl}
      imgAlt="Setting Button"
      onClick={handleButtonClick}
    />
  );
};
