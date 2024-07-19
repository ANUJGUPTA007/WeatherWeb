import { useState } from 'react'
import Weathers from './components/Weathers'
import './App.css'
import BgImage from './components/bgfin.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='h-screen flex justify-center items-center flex-col  bg-gradient-to-tr from-blue-600 to-zinc-400' >
      
      <Weathers/>

    </div>
    </>
  )
}

export default App
