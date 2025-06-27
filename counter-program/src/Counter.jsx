import React, { useState } from 'react';
function Counter() {
    const [number, setNumber] = useState(0);
    const increment = () => {
        setNumber(number + 1);
    }
    const decrement = () => {
        setNumber(number - 1);
    }
    const reset = () => {
        setNumber(0);
    }

    return (
        <div id="counter-container">
            <h1 id="header">Counter</h1>
            <p id="number">{number}</p>
            <button id="increment-btn" onClick={increment}>Increment</button>
            <button id="decrement-btn" onClick={decrement}>Decrement</button>
            <button id="reset-btn" onClick={reset}>Reset</button>
        </div>);
}

export default Counter