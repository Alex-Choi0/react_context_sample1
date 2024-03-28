// src/App.js
import { useContext } from "react"
import "./App.css"
import { CountContext } from "./context/count.context"

const App = () => {
  // useContext를 이용하여 currentNum, setCurrentNum을 불러온다.
  const { currentNum, setCurrentNum } = useContext(CountContext)

  // Up버튼을 누를시 currentNum이 1씩 증가
  const handlerUp = () => {
    setCurrentNum(currentNum + 1)
  }

  // Down버튼을 누를시 currentNum이 1씩 감소
  const handlerDown = () => {
    setCurrentNum(currentNum - 1)
  }

  return (
    <div>
      <h1>Test : {currentNum}</h1>
      <button onClick={handlerUp}>up</button>
      <button onClick={handlerDown}>down</button>
    </div>
  )
}

export default App
