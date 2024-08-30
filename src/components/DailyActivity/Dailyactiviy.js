import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import "./Dailyactivity.css";
import { useFetchActivity } from "../../utils/useFetchActivity.js";
import CustomTooltip from "../../utils/CustomTooltip.js";



function Dailyactivity ({userId}) {
    const activity = useFetchActivity(userId);
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