// src/context/count.context.jsx
import { createContext, useState } from "react"

// 실제  컴포넌트에서 Access할 데이터
export const CountContext = createContext({
  currentNum: null, // 실제 컴포넌트에서 읽을 카운트값
  setCurrentNum: () => null, // 카운트 값을 변경하기 위한 메소드
})

export const CountProvider = ({ children }) => {
  // useState를 이용하여 currentNum, setCurrentNum을 설정하고 currentNum의 초기값을 0으로 한다
  const [currentNum, setCurrentNum] = useState(0)
  // Provider를 이용하여 해당 범위의 컴포넌트에 제공하기 위해서 value값을 지정한다.
  const value = { currentNum, setCurrentNum }

  return <CountContext.Provider value={value}>{children}</CountContext.Provider>
}
