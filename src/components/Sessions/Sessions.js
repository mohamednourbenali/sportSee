import React,{ useEffect, useState } from "react";
import { getSessions} from '../../services/api.js';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Session.css'

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${payload[0].value} min`}</p>
      </div>
    );
  }

  return null;
};

const Sessions = ({userId}) => {

  const[session, setSession] = useState(null);
    useEffect(() => {
        const fetchSessions = async () => {
            try {
                const userSession = await getSessions(userId);
                const formatData = userSession.data.sessions.map((data) => {
                  switch (data.day) {
                    case 1:
                      return { ...data, day: "L" };
                    case 2:
                      return { ...data, day: "M" };
                    case 3:
                      return { ...data, day: "M" };
                    case 4:
                      return { ...data, day: "J" };
                    case 5:
                      return { ...data, day: "V" };
                    case 6:
                      return { ...data, day: "S" };
                    case 7:
                      return { ...data, day: "D" };
                    default:
                      return { ...data };
                  }
                });

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
            <Tooltip content={<CustomTooltip />} />
            <Line type="monotone" dataKey="sessionLength" strokeWidth={3} stroke="rgba(255, 255, 255, 0.7)" activeDot={{ r: 4, strokeWidth: 1, stroke: "white" }} dot={false} />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default Sessions;