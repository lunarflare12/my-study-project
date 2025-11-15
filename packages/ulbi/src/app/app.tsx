import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames/ClassNames";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "app/providers/route";

export const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <AppRouter />
        </div>
    );
};
