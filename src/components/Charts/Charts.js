import React, {useState, useEffect} from "react";
import { getUser } from '../../services/api.js';
import "./Charts.css";
import Dailyactivity from "../../components/DailyActivity/Dailyactiviy.js"
import Sessions from "../Sessions/Sessions.js";
import Performance from "../Performance/Performance.js";
import Score from "../Score/Score.js";

function Charts ({userId}) {
    const [userScore, setUserScore] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const userData = await getUser(userId);
                if(userData.data.todayScore){
                    setUserScore(userData.data.todayScore);
                }else{
                    setUserScore(userData.data.score);
                }
                
            } catch (error) {
                console.error('Failed to fetch user data:', error);
            }
        };
        fetchUser(); 
    }, [userId]);
    return (
        <div className="charts">
            <div className="daily-activity">
                <div className="daily-activity-header">
                    <p className="title">Activité quotidienne</p>
                    <div className="legend" >
                        <div className="poid">
                            <div className="black-dot"></div>
                            <p>Poids</p>
                        </div>
                        <div className="calories">
                            <div className="red-dot"></div>
                            <p>Calorie brûlées (kCal)</p>
                        </div>
                    </div>
                </div>
                <Dailyactivity userId={userId} />
            </div>
            <div className="other-charts">
                <div className="session">
                    <Sessions userId={userId}/>
                </div>
                <div className="performance">
                    <Performance userId={userId} />
                </div>
                <div className="score">
                    <Score todayScore={userScore} />
                </div>
            </div>
        </div>
    )
}

export default Charts;