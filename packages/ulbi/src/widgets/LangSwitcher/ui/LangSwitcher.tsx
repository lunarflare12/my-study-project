import { useTranslation } from "react-i18next";
import i18n from "shared/config/i18n/i18n.ts";
import { classNames } from "shared/lib/classNames/classNames.ts";
import { Button, ThemeButton } from "shared/ui/Button/Button.tsx";

interface ILangSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className }: ILangSwitcherProps) => {
  const { t } = useTranslation("common");

  const toggle = () => {
    const currentLang = i18n.language;
    const languages = ["ru", "en", "be", "kz"];
    const currentIndex = languages.indexOf(currentLang);
    const nextIndex = (currentIndex + 1) % languages.length;
    void i18n.changeLanguage(languages[nextIndex]);
  };

  return (
    <Button theme={ThemeButton.CLEAR} onClick={toggle} className={classNames("", {}, [className])}>
      {t("languageName")}
    </Button>
  );
};

