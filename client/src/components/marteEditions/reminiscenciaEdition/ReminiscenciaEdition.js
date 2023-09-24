import React from 'react';
import editions from "../../../resources/editions.json";

import "./ReminiscenciaEdition.scss";

import thumbImage from "../../../assets/images/ft_reminiscencia.png";
import dashedLine from "../../../assets/icons/pink-dashed-line.svg";
import star from "../../../assets/icons/pink-star.svg";

function ReminiscenciaEdition() {
    return (
        <div className="reminiscencia-edition">
            <div className='content'>
                <div className="thumb">
                    <div className="edition-number">
                        <div>
                            <div style={{ backgroundImage: `url("${star}")` }}></div>
                            <span>{editions.reminiscencia.edition}</span>
                        </div>
                    </div>
                    <img src={thumbImage} />
                </div>
                <div className="info">
                    <div>
                        <h1>{editions.reminiscencia.title}</h1>
                        <p>{editions.reminiscencia.description}</p>
                        <button>eu quero uma!</button>
                        <button>conteúdo extra</button>
                    </div>
                </div>
            </div>
            <div className='dashed-line' style={{backgroundImage: `url("${dashedLine}")`}}></div>
        </div>
    );
}

export default ReminiscenciaEdition;