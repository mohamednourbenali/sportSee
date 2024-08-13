import React from "react";
import {Link} from "react-router-dom";
import logo from "../../images/logo.png"
import "./Header.css"

function Header() {
    return (
        <div className="header-container">
            <img className="logo" src={logo} alt="logo du site sport see" />
            <Link to="/" className="link">
                <h2>Accueil</h2>
            </Link>
            <Link to="#" className="link">
                <h2>Profil</h2>
            </Link>
            <Link to="#" className="link">
                <h2>Réglages</h2>
            </Link>
            <Link to="#" className="link">
                <h2>Communauté</h2>
            </Link>
        </div>
    )
}

export default Header;