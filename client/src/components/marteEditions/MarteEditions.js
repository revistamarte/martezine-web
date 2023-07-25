import React from 'react';

import "./MarteEditions.scss";
import redStar from "../../assets/icons/red-star.svg";

function MarteEditions() {
    return (
        <div className="marte-editions">
            <div className="header">
                <div>
                    <span>nossas</span>
                    <img src={redStar}></img>
                    <span>edições</span>
                </div>
            </div>
        </div>
    );
}

export default MarteEditions;