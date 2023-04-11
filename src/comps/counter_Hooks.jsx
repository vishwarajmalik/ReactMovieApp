import { useState, useEffect } from 'react';
import '../App.css'

const doubleCounter = (num) => {
    return num * 2;
}


const Counter = () => {

    // initial state set to 0
    const [count, setCount] = useState(0);

    // 2nd param is dependency array
    // if [] is blank then will run once only
    // if we pass any variable in [] and whenever value of that variable changes 
    // we can call any code
    useEffect(() => {
        setCount(11);
    }, []);

    return (
        <div className='App'>
            {/* <button onClick={() => setCount(5)}>+</button> */}
            {/* <button onClick={() => console.log('clicked -')}>-</button> */}
            <button onClick={() => setCount((prevCount) => doubleCounter(prevCount) + 1)}>+</button>

            <h2>{count}</h2>

            <button onClick={() => setCount((prevCount) => prevCount - 1)}>1</button>
        </div>
    );
}

export default Counter;


