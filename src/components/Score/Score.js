import React from "react";
import { ResponsiveContainer, PieChart, Pie, Cell, Label } from "recharts";
import "./Score.css"

function Score ({todayScore}) {
    console.log("this is the todayScore : ", todayScore)
    const data = [
        {name : "user score", value : (todayScore*100)},
        {name : "score left", value : 100-(todayScore*100)},
    ];
    return (
            <ResponsiveContainer width="100%" height="100%">
                <div className="score-title">
                    <h3>Score</h3>
                </div>
                <PieChart width="100%" height="100%">
                    <Pie data={data} cx="50%" cy="50%" dataKey="value" innerRadius={70} outerRadius={85} startAngle={90} >
                        {data.map((entry, index) => {
                            if (index === 1) {
                                return <Cell key={`cell-${index}`} fill="#FBFBFB"  />;
                            }
                            return <Cell key={`cell-${index}`} cornerRadius={10} fill="red" />;
                        })}
                        <Label
                            value={`${todayScore * 100}%`}
                            position="center"
                            content={<CustomLabel todayScore={todayScore} />}
                        />
                    </Pie>

                </PieChart>
            </ResponsiveContainer>
    )
}

const CustomLabel = ({ viewBox, todayScore }) => {
    const { cx, cy } = viewBox;
    return (
        <text x={cx} y={cy} fill="black" textAnchor="middle" dominantBaseline="central">
            <tspan x={cx} dy="0.3em" fontSize="24">{`${todayScore * 100}%`}</tspan>
            <tspan x={cx} dy="1.5em" fontSize="16">de votre</tspan>
            <tspan x={cx} dy="1.5em" fontSize="16">objectif</tspan>
        </text>
    );
};

export default Score;