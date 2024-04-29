import {useState} from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return <h1 onClick={()=>console.log('ds')
  } className="text-red-500">counter : </h1>
}

export default App
