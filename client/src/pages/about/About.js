
import { useContext, useEffect } from "react";
import AppContext from "../../contexts/App.context";
import AppTheme from "../../constants/appTheme";

import "./About.scss";

function About() {
    const { setTheme } = useContext(AppContext);

    useEffect(() => {
        setTheme(AppTheme.WHITE);
    }, [setTheme]);

    return (
        <div className="marte-about">
            <label>
                Sobre
            </label>
        </div>
    )
}

export default About;
