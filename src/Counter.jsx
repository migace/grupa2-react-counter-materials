import { useState } from "react";
import style from "./Counter.module.css"

export function Counter({ initial = 0 }) {
    const [counter, setCounter] = useState(initial);

    function decrement() {
        setCounter((prevCounter) => prevCounter - 1)
    }

    function increment() {
        setCounter((prevCounter) => prevCounter + 1)
    }

    return (
        <div className={style.wrapper}>
            <button onClick={decrement}>-</button>
            <p>{counter}</p>
            <button onClick={increment}>+</button>
        </div>
    )
}
