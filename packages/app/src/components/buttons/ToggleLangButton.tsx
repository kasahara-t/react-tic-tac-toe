import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../../shared/ui/Button";

export const ToggleLangButton: FC = () => {
  const { i18n } = useTranslation();

  const handleButtonClick = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ja" : "en");
  };

  return (
    <Button variant="panel" onClick={handleButtonClick}>
      {i18n.language === "en" ? "日本語" : "English"}
    </Button>
  );
};
