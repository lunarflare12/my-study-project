import './styles/index.scss';
import {classNames} from "shared/lib/classNames/classNames.ts";
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/route";
import {NavBar} from "widgets/NavBar";
import {SideBar} from "widgets/SideBar";
import { Suspense } from "react";
// import { LangSwitcher } from "widgets/LangSwitcher";

const App = () => {
  const { theme } = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            {/* <LangSwitcher /> */}
            <Suspense fallback="">
              <NavBar />
              <div className="content-page">
                  <SideBar />
                  <AppRouter />
              </div>
            </Suspense>
        </div>
    );
};

export default App;
