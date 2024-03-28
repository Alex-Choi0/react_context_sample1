// src/index.js
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { CountProvider } from "./context/count.context"
import "./index.css"
import reportWebVitals from "./reportWebVitals"

// CountProvider를 App에 감싸서 App 및 하위 컴포넌트에 CountProvider의 value가 사용될수 있도록 한다.
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <CountProvider>
      <App />
    </CountProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
