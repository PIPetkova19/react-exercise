import React, { useState, useRef, useEffect } from 'react';

function StopWatch() {
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
        if (isRunning) {
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10);

            return () => {
                clearInterval(intervalIdRef.current);
            }
        }
    }, [isRunning]);

    function handleStopwatch() {
        const minutes = String(Math.floor(elapsedTime / 60000)).padStart(2, '0');
        const seconds = String(Math.floor((elapsedTime % 60000) / 1000)).padStart(2, '0');
        const ms = String(Math.floor((elapsedTime % 1000) / 10)).padStart(2, '0');
        return `${minutes}:${seconds}:${ms}`;
    }

    function start() {
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }

    function stop() {
        setIsRunning(false);
    }

    function reset() {
        setElapsedTime(0);
        setIsRunning(false);
    }

    return (
        <div id="container">
            <div id="stopwatch-container">{handleStopwatch()}</div>
            <button id="start-btn" onClick={start}>Start</button>
            <button id="stop-btn" onClick={stop}>Stop</button>
            <button id="reset-btn" onClick={reset}>Reset</button>
        </div>
    );
}

export default StopWatch