import { useContext, useEffect } from "react";
import AppBackground from "../../constants/appBackground";
import AppContext from "../../contexts/App.context";

import "./Editions.scss";

function Editions({ background }) {
    const { setBackground } = useContext(AppContext);

    useEffect(() => {
        setBackground(
            background ? background : AppBackground.WHITE
        );
    }, []);

    return (
        <div className="marte-editions">
            <label>
                Edições
            </label>
        </div>
    )
}

export default Editions;
