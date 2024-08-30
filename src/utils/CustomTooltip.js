import React from 'react';


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

export default CustomTooltip;