import { Route, Routes } from "react-router-dom";
import MarteHeader from "../../components/marteHeader/MarteHeader";
import SplashScreen from "../splashScreen/SplashScreen";

import "./MainApp.scss";

function MainApp() {
    return (
        <div className="main-app">
            <MarteHeader />
            <Routes>
                <Route path="/" element={<SplashScreen />} />
                <Route path="*" element={<div>404</div>} />
            </Routes>
        </div>
    )
}

export default MainApp;
