import cls from "./AppLink.module.scss";
import {Link, type LinkProps} from "react-router-dom";
import {type FC} from "react";
import { classNames } from "shared/lib/classNames/classNames.ts";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  RED = "red",
}

interface IAppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<IAppLinkProps> = (props) => {
  const {
    to,
    className,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props;

  return (
    <Link
      to={to}
      className={classNames(cls.AppLink, {[cls[theme]]: true}, [className])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
