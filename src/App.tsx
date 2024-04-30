import React, {useState} from 'react';
import './App.css';
import {plus2} from "./actions/plus2"
import {minus2} from "./actions/minus2"
import {multiply2} from "./actions/multiply2"

function App() {
    const [value, setValue] = useState(0);

    return (
        <div>
            <h1>Counter</h1>
            <div>
                <p>
                    Final value: {value}
                </p>
                <button onClick={() => setValue(prev => plus2(prev))}>
                    +2
                </button>
                <button onClick={() => setValue(prev => minus2(prev))}>
                    -2
                </button>
                <button onClick={() => setValue(prev => multiply2(prev))}>
                    *2
                </button>
            </div>
        </div>
    );
}

export default App;
