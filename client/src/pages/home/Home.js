import React, { useContext, useEffect } from "react";
import AppContext from "../../contexts/App.context";
import AppTheme from "../../constants/appTheme";

import "./Home.scss";
import MarteEditions from "../../components/marteEditions/MarteEditions";

function Home() {
    const { setTheme } = useContext(AppContext);

    useEffect(() => {
        setTheme(AppTheme.RED);
    }, [setTheme]);

    return (
        <div className="marte-home">
            <div className="intro">
                <h1 className="title"><div>oi,</div> bem vindos<br/>à marte.</h1>
                <div className="text-type-1">
                    tudo começou na nossa vontade fazer arte e teve ponto de partida num cafezinho, aqui pela zona norte. mas se expandiu pra outros lugares e fez a gente perceber uma disposição de pensar e falar sobre tudo e todas as coisas.
                </div>
                <div className="text-type-2">
                    essa revista nasce dessa descoberta
                </div>
                <div className="text-type-1">
                    e a possibilidade de juntar esses momentos tão especiais pra gente em um lugar só, parece coisa de outro planeta mesmo.
                </div>
                <div className="join">
                    <button>quero embarcar<br/>nessa viagem!</button>
                </div>
            </div>
            <MarteEditions />
        </div>
    )
}

export default Home;
