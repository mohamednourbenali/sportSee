import React from "react";
import  {Link} from "react-router-dom";
import "./Error.css";


function Error ()  {
    return (
        <div className="error-page">
            <h1 className="error-title">Erreur 404!</h1>
            <Link to="/" className="link">
                <h2 className="link-home">Retour à la page d'<span>accueil</span></h2>
            </Link>
        </div>
    )
}

export default Error;