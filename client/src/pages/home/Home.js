import React, { useContext, useEffect } from "react";
import AppContext from "../../contexts/App.context";
import AppBackground from "../../constants/appBackground";

import "./Home.scss";

function Home({ background }) {
    const { setBackground } = useContext(AppContext);

    useEffect(() => {
        setBackground(
            background ? background : AppBackground.WHITE
        );
    }, []);

    return (
        <div className="marte-home">
            <label>
                Home
            </label>
        </div>
    )
}

export default Home;
