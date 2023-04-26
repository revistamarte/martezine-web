import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import MarteHeader from "../../components/marteHeader/MarteHeader";
import Home from "../home/Home";
import Editions from "../editions/Editions";
import Subscribe from "../subscribe/Subscribe";
import About from "../about/About";

import "./MainApp.scss";

function MainApp() {
    const [debug, setDebug] = useState(false);

    return (
        <div className="main-app">
            <div className={"main-app-content" + (debug ? " debug" : "")}>
                <MarteHeader />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/edicoes" element={<Editions />} />
                    <Route path="/assinar" element={<Subscribe />} />
                    <Route path="/sobre" element={<About />} />
                    <Route path="*" element={<div>404</div>} />
                </Routes>
                <button onClick={() => setDebug(!debug)}>debug</button>
            </div>
        </div>
    )
}

export default MainApp;
