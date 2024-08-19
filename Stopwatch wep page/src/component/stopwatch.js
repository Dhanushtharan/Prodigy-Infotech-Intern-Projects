import React, { useState, useRef } from 'react';

const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [laps, setLaps] = useState([]);
    const intervalRef = useRef(null);

    const startTimer = () => {
        if (!isActive) {
            setIsActive(true);
            intervalRef.current = setInterval(() => {
                setTime(prevTime => prevTime + 10);
            }, 10);
        }
    };

    const pauseTimer = () => {
        clearInterval(intervalRef.current);
        setIsActive(false);
    };

    const resetTimer = () => {
        clearInterval(intervalRef.current);
        setIsActive(false);
        setTime(0);
        setLaps([]);
    };

    const recordLap = () => {
        if (isActive) {
            setLaps([...laps, time]);
        }
    };

    const formatTime = (time) => {
        const getMilliseconds = `0${(time % 1000) / 10}`.slice(-2);
        const seconds = `0${Math.floor(time / 1000) % 60}`.slice(-2);
        const minutes = `0${Math.floor(time / 60000) % 60}`.slice(-2);
        return `${minutes}:${seconds}.${getMilliseconds}`;
    };

    return (
        <div className="stopwatch">
            <h1>{formatTime(time)}</h1>
            <div className="buttons">
                <button onClick={startTimer}>Start</button>
                <button onClick={pauseTimer}>Pause</button>
                <button onClick={resetTimer}>Reset</button>
                <button onClick={recordLap}>Lap</button>
            </div>
            <ul>
                {laps.map((lap, index) => (
                    <li key={index}>Lap {index + 1}: {formatTime(lap)}</li>
                ))}
            </ul>
        </div>
    );
};

export default Stopwatch;
