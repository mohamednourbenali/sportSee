import React, {useEffect, useState} from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { getPerformance } from "../../services/api.js";

const Performance = ({userId}) => {
    const[userPerformance, setUserPerformance] = useState(null);
    useEffect(() => {
        const fetchPerformance = async () => {
            try {
                const request = await getPerformance(userId);
                const formatData = request.data.data.map((data) => {
                    switch (data.kind) {
                        case 1:
                            return { ...data, kind: 'Cardio' };
                        case 2:
                            return { ...data, kind: 'Energie' };
                        case 3:
                            return { ...data, kind: 'Endurance' };
                        case 4:
                            return { ...data, kind: 'Force' };
                        case 5:
                            return { ...data, kind: 'Vitesse' };
                        case 6:
                            return { ...data, kind: 'Intensité' };
                        default:
                            return {...data };
                    }   
                });
                setUserPerformance(formatData)
            }catch (error) {
                console.error("failed to fetch user Perfomance: ", error);
            }
        }
        fetchPerformance();
    }, [userId]);
    return (
        <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="60%" data={userPerformance}>
                <PolarGrid  gridType="polygon"/>
                <PolarAngleAxis dataKey="kind" stroke='white' tickLine={false} axisLine={false}  tick={{ fontSize: 12 }} />
                <Radar dataKey="value" stroke="red" fill="red" fillOpacity={0.6} />
            </RadarChart>
        </ResponsiveContainer>
    );
};

export default Performance;