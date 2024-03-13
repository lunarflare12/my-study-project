import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { classNames } from "shared/helpers/classNames/ClassNames";
import { useTheme } from "app/providers/ThemeProvider";
import { HomePageLazy } from "pages/homePage/ui/HomePage.lazy";
import { AboutPageLazy } from "pages/aboutPage/ui/AboutPage.lazy";

export const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Suspense fallback={<h1>loading...</h1>}>
                <Routes>
                    <Route path="/" element={<HomePageLazy />} />
                    <Route path="/about" element={<AboutPageLazy />} />
                </Routes>
            </Suspense>
        </div>
    );
};
