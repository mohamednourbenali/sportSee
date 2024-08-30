import React from "react";
import "./Nutriments.css";
import {imageSet} from "../../utils/imageSet.js";

function Nutriments ({count,title, scale}) {
    return (
        <div className="nutriments">
            <img src={imageSet(title)} alt={title} />
            <div className="numbers">
                <h1>{count}{scale}</h1>
                <p>{title}</p>
            </div>
        </div>
    )
}

export default Nutriments;