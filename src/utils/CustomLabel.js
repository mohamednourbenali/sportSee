import React from "react";

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

export default CustomLabel;