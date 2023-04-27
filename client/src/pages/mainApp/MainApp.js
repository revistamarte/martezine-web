import { Route, Routes } from "react-router-dom";
import MarteHeader from "../../components/marteHeader/MarteHeader";
import Home from "../home/Home";
import Editions from "../editions/Editions";
import Subscribe from "../subscribe/Subscribe";
import About from "../about/About";

import "./MainApp.scss";

function MainApp() {

    return (
        <div className="main-app">
            <div className={"main-app-content"}>
                <MarteHeader />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/edicoes" element={<Editions />} />
                    <Route path="/assinar" element={<Subscribe />} />
                    <Route path="/sobre" element={<About />} />
                    <Route path="*" element={<div>404</div>} />
                </Routes>
            </div>
        </div>
    )
}

export default MainApp;
