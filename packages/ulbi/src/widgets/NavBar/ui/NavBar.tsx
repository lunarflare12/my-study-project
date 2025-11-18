import cls from './NavBar.module.scss';
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import { classNames } from "shared/lib/classNames/classNames.ts";

interface INavbarProps {
    className?: string;
}

export const NavBar = ({className}: INavbarProps) => {
    return (
        <div className={classNames (cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={cls.mainLink}>
                    Главная
                </AppLink>
                <AppLink theme={AppLinkTheme.RED} to={'/about'}>
                    О сайте
                </AppLink>
            </div>
        </div>
    );
};
