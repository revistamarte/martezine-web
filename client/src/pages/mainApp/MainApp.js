import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import AppContext from "../../contexts/App.context";
import MarteHeader from "../../components/marteHeader/MarteHeader";
import Home from "../home/Home";
import Editions from "../editions/Editions";
import Subscribe from "../subscribe/Subscribe";
import About from "../about/About";

import "./MainApp.scss";
import AppBackground from "../../constants/appBackground";

function MainApp() {
    const { background } = useContext(AppContext);

    return (
        <div className={`main-app ${background}`}>
            <div className={"main-app-content"}>
                <MarteHeader />
                <Routes>
                    <Route path="/" element={<Home background={AppBackground.RED} />} />
                    <Route path="/edicoes" element={<Editions background={AppBackground.BLUE} />} />
                    <Route path="/assinar" element={<Subscribe background={AppBackground.RED} />} />
                    <Route path="/sobre" element={<About background={AppBackground.WHITE} />} />
                    <Route path="*" element={<div>404</div>} />
                </Routes>
            </div>
        </div>
    )
}

export default MainApp;
