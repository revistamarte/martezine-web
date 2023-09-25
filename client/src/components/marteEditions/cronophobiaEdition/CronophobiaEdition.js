import React from 'react';
import editions from "../../../resources/editions.json";

import "./CronophobiaEdition.scss";

import thumbImage from "../../../assets/images/ft_chronophobia.png";
import dashedLine from "../../../assets/icons/red-dashed-line.svg";
import star from "../../../assets/icons/red-star.svg";

function CronophobiaEdition() {
    return (
        <div className="cronophobia-edition">
            <div className='content'>
                <div className="thumb">
                    <div className="edition-number">
                        <div>
                            <div style={{ backgroundImage: `url("${star}")` }}></div>
                            <span>{editions.cronophobia.edition}</span>
                        </div>
                    </div>
                    <img src={thumbImage} alt="cronofobia" />
                </div>
                <div className="info">
                    <div>
                        <h1>{editions.cronophobia.title}</h1>
                        <p>{editions.cronophobia.description}</p>
                        <button>saiba mais!</button>
                    </div>
                </div>
            </div>
            <div className='dashed-line' style={{backgroundImage: `url("${dashedLine}")`}}></div>
        </div>
    );
}

export default CronophobiaEdition;