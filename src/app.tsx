import { Link, Route, Routes } from "react-router-dom";
import { HomePageLazy } from "./pages/homePage/HomePage.lazy";
import { AboutPageLazy } from "./pages/aboutPage/AboutPage.lazy";
import { Suspense } from "react";

export const App = () => {
  return (
    <div>
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
