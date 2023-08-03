import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header/Header'
import Button from './component/Button/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <Header></Header>
      <Button>Sort By Date</Button>
    </div>
  )
}

export default App
