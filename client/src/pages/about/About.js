
import { useContext, useEffect } from "react";
import AppContext from "../../contexts/App.context";
import AppBackground from "../../constants/appBackground";

import "./About.scss";

function About({ background }) {
    const { setBackground } = useContext(AppContext);

    useEffect(() => {
        setBackground(
            background ? background : AppBackground.WHITE
        );
    }, []);

    return (
        <div className="marte-about">
            <label>
                Sobre
            </label>
        </div>
    )
}

export default About;
