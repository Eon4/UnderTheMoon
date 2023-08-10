import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<div class="topnav">
  <a class="active" href="#home">HJEM</a>
  <a href="#news">KONCEPTER</a>
  <a href="#contact">UTM LOYALTY</a>
  <a href="#about">OM</a>
  <a href="#contact">KONTAKT</a>
</div>
      <h1>Under the Moon</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
