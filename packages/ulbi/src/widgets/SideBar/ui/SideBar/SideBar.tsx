import cls from "./SideBar.module.scss";
import {useState} from "react";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import { classNames } from "shared/lib/classNames/classNames";
import { LangSwitcher } from "widgets/LangSwitcher";
import { useTranslation } from "react-i18next";

interface ISidebarProps {
  className?: string;
}

export const SideBar = ({className}: ISidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation("widgets");

  const onToggle = () => {
    setCollapsed(prev => !prev);
  };

  return (
    <div
      className={classNames(cls.sidebar, {[cls.collapsed]: collapsed}, [className])}
    >
      <button onClick={onToggle}>{t("toggle")}</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang}/>
      </div>
    </div>
  );
};
