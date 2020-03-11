import React, { useState, useEffect } from 'react';

const IntervalExample = () => {
    const [time, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(time => new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="time">
            <span className="hours">{new Date(time).getHours()}</span>
            <span className="minutes">{new Date(time).getMinutes()}</span>
            <span className="seconds">{new Date(time).getSeconds()}</span>
        </div>
    );
};

export default IntervalExample;