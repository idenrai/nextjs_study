import React, { useState, useCallback, useDebugValue } from 'react'

// 커스텀 훅
// input용으로 콜백과 현재의 입력 내용을 모은 훅
// Input요소의 onChange가 호출되면 내부 상태를 업데이트하기 위해 useState, useCallback을 사용
// 커스텀 훅을 정의하여, 함수 컴포넌트 안에서 코드가 깔끔하게 정리되며 로직 공용화 가능
const useInput = () => {
  const [state, setState] = useState('')
  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value)
  }, [])

  // 디버그용으로 값 출력
  useDebugValue(`Input: ${state}`)

  return [state, onChange] as const
}

// 커스텀 훅을 호출하여 state와 function을 얻고, input요소에 전달
const Input = () => {
  const [text, onChangeText] = useInput()
  return (
    <div>
      <input type="text" value={text} onChange={onChangeText} />
      <p>Input: {text}</p>
    </div>
  )
}

export default Input
