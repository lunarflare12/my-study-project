import { classNames } from "shared/lib/classNames/ClassNames";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "app/providers/route";
import { NavBar } from "widgets/NavBar";

export const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <NavBar />
            <AppRouter />
            <button onClick={toggleTheme}>TOGGLE</button>
        </div>
    );
};
