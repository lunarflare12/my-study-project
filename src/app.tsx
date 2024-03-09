import { Suspense, useContext, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { HomePageLazy } from "./pages/homePage/HomePage.lazy";
import { AboutPageLazy } from "./pages/aboutPage/AboutPage.lazy";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/ClassNames";

export const App = () => {
  const {theme, toggleTheme} = useTheme()


  return (
    <div className={classNames('app', {},[theme])}>
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
