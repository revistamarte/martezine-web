import React from 'react';
import editions from "../../../resources/editions.json";

import "./SolitudeEdition.scss";

import thumbImage from "../../../assets/images/ft_solitude.png";
import dashedLine from "../../../assets/icons/white-dashed-line.svg";
import star from "../../../assets/icons/blue-star.svg";

function SolitudeEdition() {
    return (
        <div className="solitude-edition">
            <div className='content'>
                <div className="thumb">
                    <div className="edition-number">
                        <div>
                            <div style={{ backgroundImage: `url("${star}")` }}></div>
                            <span>{editions.solitude.edition}</span>
                        </div>
                    </div>
                    <img src={thumbImage} />
                </div>
                <div className="info">
                    <div>
                        <h1>{editions.solitude.title}</h1>
                        <p>{editions.solitude.description}</p>
                        <button>eu quero uma!</button>
                        <button>conteúdo extra</button>
                    </div>
                </div>
            </div>
            <div className='dashed-line' style={{backgroundImage: `url("${dashedLine}")`}}></div>
        </div>
    );
}

export default SolitudeEdition;