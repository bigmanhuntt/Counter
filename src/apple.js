import React, { useState } from 'react';
import './App.css';
const Counter = () => {
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <h1>{counter}</h1>

            <div>
                <button onClick={() => setCounter(counter - 1)} className = "Button">Decrease</button>
                <button onClick={() => setCounter(0)} className = "Button" >Reset</button>
                <button onClick={() => setCounter(counter + 1)} className = "Button" >Increase</button>
            </div>
        </div>
    );
};

export default Counter;
