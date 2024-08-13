import React from "react";
import yoga from "../../images/yoga.png";
import natation from "../../images/natation.png";
import cyclisme from "../../images/cyclisme.png";
import halterophilie from "../../images/halterophilie.png";
import "./Sidebar.css"

function Sidebar() {
    let images = [yoga, natation, cyclisme, halterophilie]
    return (
        <div className="sidebar-container">
            {images.map((image,index) => {
                return (
                    <div className="image-container" key={index}>
                        <img src={image} alt="sport" className="image" />
                    </div>
                )
            })}
        </div>
    )
}

export default Sidebar;