import React, { useContext, useEffect } from "react";
import AppContext from "../../contexts/App.context";
import AppTheme from "../../constants/appTheme";

import "./Home.scss";

function Home() {
    const { setTheme } = useContext(AppContext);

    useEffect(() => {
        setTheme(AppTheme.RED);
    }, [setTheme]);

    return (
        <div className="marte-home">
            <label>
                Home
            </label>
        </div>
    )
}

export default Home;
