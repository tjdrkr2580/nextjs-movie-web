import {useState} from "react";

export default function About() {
    const [counter, setCounter] = useState(0);
    return (<div>
        <h1>Counter {counter}</h1>
        <button
            onClick={() => {
                setCounter((prev) => prev + 1);
            }
            }>
                +</button>
        </div>);
}