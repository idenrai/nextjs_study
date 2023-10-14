import React, { useState, useRef, useImperativeHandle } from 'react'

// useImperativeHandle
// 컴포넌트에 ref가 전달될 때, 부모의 ref에 대입할 값을 설정
// 이를 사용하여, 컴포넌트 함수를 부모로부터 원하는 시점에 호출할 수 있다
// 다만 많은 경우 props로 대용 가능하다

// 메시지 표시 샘플
// - forwardRef
//   - 자식 컴포넌트에서 부모로부터 전달된 ref참조

// 자식 컴포넌트에서 useImperativeHandle을 호출
// (부모로부터 전달된 ref, 객체가 반환하는 함수)
// 함수의 반환값이 부모의 ref에 설정됨

const Child = React.forwardRef((props, ref) => {
  const [message, setMessage] = useState<string | null>(null)

  // 부모의 ref로부터 참조할 수 있는 값을 지정
  useImperativeHandle(ref, () => ({
    showMessage: () => {
      const date = new Date()
      const message = `Hello, it's ${date.toLocaleString()} now`
      setMessage(message)
    },
  }))

  return <div>{message ? <p>{message}</p> : null}</div>
})

const Parent = () => {
  const childRef = useRef<{ showMessage: () => void }>(null)
  const onClick = () => {
    if (childRef.current !== null) {
      // 자식의 useImperativeHandle 에서 지정한 값을 참조
      childRef.current.showMessage()
    }
  }
  return (
    <div>
      <button onClick={onClick}>Show Message</button>
      <Child ref={childRef} />
    </div>
  )
}

export default Parent
