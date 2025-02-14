import { useState } from "react"

export const App = () => {
  const [count, setCount] = useState(0);

  const handleBtn = () => {
    setCount(count + 1)
  }
  
  return <>
    <div className="welcome">Welcome to your first React Application!</div>
    <button className="btn-secondary" onClick={handleBtn}>Click Me!</button>
    <div>Count: {count}</div>
  </>
}
