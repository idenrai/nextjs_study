import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import App from './App' // App.js에서 APP 함수 로딩
import reportWebVitals from './reportWebVitals'
import Hello from './components/Hello'
import Clock from './components/Clock'
import User from './components/User'
import ImageUploader from './components/ImageUploader'
import Parent from './components/Parent'
import Input from './components/Input'

// 1. 화면에 index.html을 출력
// 2. index.html의 root를 지정
// 3. root 이하를 App으로 지정해서 React로 그 내부를 그림
const root = ReactDOM.createRoot(
  // index.html에 있는, root를 id로 가지는 요소를 지정
  document.getElementById('root') as HTMLElement
)
root.render(
  // 화면에 그릴 JSX태그 지정
  <React.StrictMode>
    {/* src/App에서 임포트한 것을 사용 */}
    <Hello />
    {/* useEffect */}
    <Clock />
    {/* useContext */}
    <User />
    {/* useRef */}
    <ImageUploader />
    {/* useImperativeHandle */}
    <Parent />
    {/* CustomHook */}
    <Input />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
