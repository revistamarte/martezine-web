import { useContext, useEffect } from "react";
import AppBackground from "../../constants/appBackground";
import AppContext from "../../contexts/App.context";

import "./Subscribe.scss";

function Subscribe({ background }) {
    const { setBackground } = useContext(AppContext);

    useEffect(() => {
        setBackground(
            background ? background : AppBackground.WHITE
        );
    }, []);

    return (
        <div className="marte-subscribe">
            <label>
                Assinar
            </label>
        </div>
    )
}

export default Subscribe;
