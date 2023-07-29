import React from 'react';
import redStar from "../../assets/icons/red-star.svg";
import CronophobiaEdition from './cronophobiaEdition/CronophobiaEdition';
import SolitudeEdition from './solitudeEdition/SolitudeEdition';
import ReminiscenciaEdition from './reminiscenciaEdition/ReminiscenciaEdition';

import "./MarteEditions.scss";

function MarteEditions() {
    return (
        <div className="marte-editions-home">
            <div className="header">
                <div>
                    <span>nossas</span>
                    <img src={redStar}></img>
                    <span>edições</span>
                </div>
            </div>
            <ReminiscenciaEdition />
            <SolitudeEdition />
            <CronophobiaEdition />
        </div>
    );
}

export default MarteEditions;