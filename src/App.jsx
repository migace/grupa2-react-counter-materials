import { useState } from "react"
import { Counter } from "./Counter"
import { HelloWorld } from "./HelloWorld"
import { RandomWord } from "./RandomWord"

function App() {
  const [randomWord, setRandomWord] = useState("")

  const getRandomWord = (name) => {
    setRandomWord(name);
  }

  return (
    <div>
      <HelloWorld name="test" />
      <HelloWorld />
      <HelloWorld name="World!!!!@!!" />
      <HelloWorld />
      <Counter />
      <Counter initial={100} />
      <Counter initial={50} />
      <h1>{randomWord}</h1>
      <RandomWord click={getRandomWord} />
    </div>
  )
}

export default App
