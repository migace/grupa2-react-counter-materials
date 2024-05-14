import { generate } from "random-words";

export function RandomWord({ click }) {
    const clickHandler = () => {
        click(generate());
    }

    return (
        <button onClick={clickHandler}>Get random Word!</button>
    )
}