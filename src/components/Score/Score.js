import React from "react";
import { ResponsiveContainer, PieChart, Pie, Cell, Label } from "recharts";
import "./Score.css";
import CustomLabel from "../../utils/CustomLabel.js"

function Score ({todayScore}) {
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
export default Score;