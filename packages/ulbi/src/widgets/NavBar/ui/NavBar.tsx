import cls from "./NavBar.module.scss";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";

interface INavbarProps {
  className?: string;
}

export const NavBar = ({className}: INavbarProps) => {
  const { t } = useTranslation("widgets");

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={"/"} className={cls.mainLink}>
          {t("home")}
        </AppLink>
        <AppLink theme={AppLinkTheme.RED} to={"/about"}>
          {t("about")}
        </AppLink>
      </div>
    </div>
  );
};
