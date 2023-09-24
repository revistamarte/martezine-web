import { useContext, useEffect } from "react";
import AppTheme from "../../constants/appTheme";
import AppContext from "../../contexts/App.context";

import "./Subscribe.scss";

function Subscribe() {
    const { setTheme } = useContext(AppContext);

    useEffect(() => {
        setTheme(AppTheme.RED);
    }, [setTheme]);

    return (
        <div className="marte-subscribe">
            <label>
                Assinar
            </label>
        </div>
    )
}

export default Subscribe;
