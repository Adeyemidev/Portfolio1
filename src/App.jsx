import './App.css'
import { useEffect, useState } from 'react'
import { Home } from './Home'
import { MoonLoader } from 'react-spinners'

function App() {
const [isLoading, setIsLoading] = useState(false);

  useEffect(()=>{
    setIsLoading(true)
    setTimeout(()=>{
      setIsLoading(false)
    }, 3000)
      },[])

  return (
    <div className='App'>
{isLoading? <div className='grid place-items-center h-screen'><MoonLoader
  color="#4EE1A0" size={30}/></div>:
    <Home/>}
    </div>
  )
}

export default App
