import React,{ useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getActivity} from '../../services/api.js';
import "./Dailyactivity.css"


function Dailyactivity ({userId}) {
    const[activity, setActivity] = useState(null);
    useEffect(() => { 
        const fetchActivity = async () => {
            try{
                const userActivity = await getActivity(userId);
                const transformedActivity = userActivity.data.sessions.map(session => ({
                    ...session,
                    day: new Date(session.day).getDate()
                  }));
                  setActivity(transformedActivity);
            } catch (error) {
                console.error("failed to fetch user activity", error)
            }
        };
        fetchActivity();
    }, [userId]);
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bar-custom-tooltip">
                    <p>{`${payload[0].value} kg`}</p>
                    <p>{`${payload[1].value} Cal`}</p>
                </div>
            );
        }
        return null;
    };
    return (
        <ResponsiveContainer width="100%" height="50%">
            <BarChart data={activity} barGap={8}>
                <CartesianGrid vertical={false} strokeDasharray="1 1" />
                <XAxis dataKey="day" tickLine={false} tick={{fontSize: 14}} dy={15} stroke="1 1" />
                <YAxis yAxisId="kilogram" dataKey="kilogram" type="number" domain={['dataMin - 2', 'dataMax + 1']} tickCount="4" axisLine={false} orientation="right" tickLine={false} tick={{fontSize: 14}} dx={15} />
                <YAxis yAxisId="calories"   type="number" domain={['dataMin - 80', 'dataMax + 20']}  hide={true}/>
                <Tooltip content={<CustomTooltip />} />
                <Bar yAxisId="kilogram" dataKey="kilogram" fill="#282D30" background={{ fill: '#eee' }} barSize={7} radius={[50, 50, 0, 0]}/>
                <Bar yAxisId="calories" dataKey="calories" fill="#E60000" barSize={7} radius={[50, 50, 0, 0]}/>
            </BarChart>
        </ResponsiveContainer>
    )

}

export default Dailyactivity;