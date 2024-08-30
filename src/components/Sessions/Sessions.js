import React,{ useEffect, useState } from "react";
import { getUserData } from '../../services/api.js';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import './Session.css'
import SessionTooltip from "../../utils/SessionTooltip.js"
import { formatDay } from "../../utils/formatDay.js";

const Sessions = ({userId}) => {

  const[session, setSession] = useState(null);
    useEffect(() => {
        const fetchSessions = async () => {
            try {
              const response = await getUserData("USER_AVERAGE_SESSIONS", userId);
              const formatData = response.data.sessions.map((data) => ({
                  ...data,
                  day: formatDay(data.day)
              }));
              setSession(formatData);
            }catch (error) {
                console.error("failed to fetch user activity", error)
            }
        }
        fetchSessions();
    }, [userId]);
  return (        
        <ResponsiveContainer width="100%" height="90%" className='average-session'>
            <h3>Durée moyenne des session </h3>
            <LineChart width={500} height={300} data={session} margin={{ top: 5, right: 30, left: 20, bottom: 5,}}>
            <XAxis type="category" dataKey="day" stroke="red" tick={{ fontSize: 13, stroke: "white", opacity: 0.8}} />
            <YAxis dataKey="sessionLength" hide={true} />
            <Tooltip content={<SessionTooltip />} />
            <Line type="monotone" dataKey="sessionLength" strokeWidth={3} stroke="rgba(255, 255, 255, 0.7)" activeDot={{ r: 4, strokeWidth: 1, stroke: "white" }} dot={false} />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default Sessions;