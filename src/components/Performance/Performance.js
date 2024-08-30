import React, {useEffect, useState} from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { getUserData } from "../../services/api.js";
import {formatPerformanceData} from "../../utils/formatPerformanceData.js";

const Performance = ({userId}) => {
    const[userPerformance, setUserPerformance] = useState(null);
    useEffect(() => {
        const fetchPerformance = async () => {
            try {
                const response = await getUserData("USER_PERFORMANCE",userId);
                const formatData = formatPerformanceData(response.data.data);
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