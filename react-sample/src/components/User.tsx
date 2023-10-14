import React, { useContext } from 'react'

// useContext
// context로부터 값을 참조하기 위한 훅
// useContext의 인수에 Context를 전달하여, 해당 Context의 값을 얻을 수 있음

type User = {
  id: number
  name: string
}

const UserContext = React.createContext<User | null>(null)

const GrandChild = () => {
  const user = useContext(UserContext)
  return user !== null ? <p>Hello, {user.name}</p> : null
}

const Child = () => {
  const now = new Date()

  return (
    <div>
      <p>Current : {now.toLocaleString()}</p>
      <GrandChild />
    </div>
  )
}

const Parent = () => {
  const user: User = {
    id: 1,
    name: 'Alice',
  }

  return (
    // Context에 값 전달
    <UserContext.Provider value={user}>
      <Child />
    </UserContext.Provider>
  )
}

export default Parent
