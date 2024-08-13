import { useState } from 'react'
import Title from '../../shared/components/Title/Title'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className="page-container">
      <Title text="To do app with React + Vite + Sass + Tailwind + Redux Toolkit"/>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Click me
        </button>
        <p>Count is {count}</p>
      </div>
    </div>
  )
}

export default Home
