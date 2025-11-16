import { classNames } from "shared/lib/classNames/ClassNames";
import cls from "./NavBar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink.tsx";

interface INavBarProps {
  className?: string;
}

export const NavBar = ({ className }: INavBarProps) => {
  return (
    <div className={classNames(cls.NavBar, {}, [className])}>
      <div className={cls.links}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          className={cls.mainLink}
          to={"/"}>
          Home
        </AppLink>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={"/about"}>
          About
        </AppLink>
      </div>
    </div>
  );
};

