import type { FC } from "react";
import { BaseButton } from "./BaseButton";
import settingImageUrl from "./setting.png";

export const SettingButton: FC = () => {
  const handleButtonClick = () => {
    alert("setting is not implement!");
  };
  return <BaseButton imgPath={settingImageUrl} onClick={handleButtonClick} />;
};
