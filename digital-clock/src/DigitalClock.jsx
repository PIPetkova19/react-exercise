import React, { useState, useEffect } from 'react'

function DigitalClock() {
    const [clock, setClock] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setClock(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    },[]); //стартира само 1 интервал

    function formatTime() {
        const hours = clock.getHours().toString().padStart(2, '0');
        const minutes = clock.getMinutes().toString().padStart(2, '0');
        const seconds = clock.getSeconds().toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    }

    return (
        <div id="container">
            <span id="clock-container">{formatTime()}
            </span>
        </div>
    );
}

export default DigitalClock