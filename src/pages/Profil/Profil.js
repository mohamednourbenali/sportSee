import React, { useEffect, useState }  from "react";
import { useParams } from "react-router-dom";
import { getUserData } from '../../services/api.js';
import Nutriments from "../../components/Nutriments/Nutriments.js";
import "./Profile.css"
import Charts from "../../components/Charts/Charts.js";
function Profil () {
    const {userId} = useParams();
    const id = parseInt(userId, 10);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await getUserData ("USER_MAIN_DATA",id);
                setUser(response);
            } catch (error) {
                console.error('Failed to fetch user data:', error);
            }
        };
        fetchUser(); 
    }, [userId]);

    return (
        <div className="profil-container">
            <div className="greetings-container">
                <div className="greetings">
                    <h1>Bonjour <span style={{color:"#E60000"}}>{id === 12 ? "Karl" : id === 18 ? "Cecilia" : ""}</span></h1>
                    <p>Félicitation vous avez explosé votre objectifs hier 👏</p>
                </div>
                <div className="side"></div>
            </div>
            <div className="details">
                <div className="charts-container">
                    <Charts userId={userId} />
                </div>
                <div className="nutriments-container">
                    {user && user.data && user.data.keyData && (
                        <>
                            <Nutriments count={user.data.keyData.calorieCount} scale="Kcal" title="Calories" />
                            <Nutriments count={user.data.keyData.proteinCount} scale="g" title="Proteines" />
                            <Nutriments count={user.data.keyData.carbohydrateCount} scale="g" title="Glucides" />
                            <Nutriments count={user.data.keyData.lipidCount} scale="g" title="Lipides" />
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Profil;