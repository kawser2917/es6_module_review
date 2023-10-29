import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Watch from './Components/Watch/Watch'

function App() {
  // const watches =[ 
  //   {id:1, brand:"Apple", price:300},
  //   {id:2,brand:"Samsumg",price:100},
  //   {id:3,brand:"Xiaomi", price:400}
  // ]
  const [watches,setWatches] = useState([])
  useEffect( ()=>{
    fetch('watch.json')
    .then(res => res.json())
    .then(data=>setWatches(data))
  },[])

  return (
    <>
      <h1>Vite + React</h1>
      {
        watches.map( watch => <Watch key={watch.id} watch={watch}></Watch>)
      }
 
    </>
  )
}

export default App
