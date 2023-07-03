import { useContext, useEffect } from "react";
import AppTheme from "../../constants/appTheme";
import AppContext from "../../contexts/App.context";

import "./Editions.scss";

function Editions() {
    const { setTheme } = useContext(AppContext);

    useEffect(() => {
        setTheme(AppTheme.BLUE);
    }, [setTheme]);

    return (
        <div className="marte-editions">
            <label>
                Edições
            </label>
        </div>
    )
}

export default Editions;
