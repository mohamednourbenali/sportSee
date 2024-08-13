import React from "react";
import calories from "../../images/calories.png";
import glucides from "../../images/glucides.png";
import proteines from "../../images/proteines.png";
import lipides from "../../images/lipides.png";

import "./Nutriments.css";

function Nutriments ({count,title, scale}) {
    const imageSet = () => {
        switch (title) {
            case 'Calories':
                return calories;
            case 'Proteines':
                return proteines;
            case 'Glucides' :
                return glucides;
            case 'Lipides' :
                return lipides;
            default:
                return "";
        }
    }
    return (
        <div className="nutriments">
            <img src={imageSet()} alt="calories" />
            <div className="numbers">
                <h1>{count}{scale}</h1>
                <p>{title}</p>
            </div>
        </div>
    )
}

export default Nutriments;