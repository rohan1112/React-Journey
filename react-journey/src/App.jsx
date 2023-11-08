import { useState } from "react"

function App() {

  const [counter ,setCounter]=useState(0)

  function add(){
    if(counter<20){
      setCounter(counter+1)
      console.log(counter)
    }
    
  }
  const remove=()=>{
    if(counter>0){
      setCounter(counter-1)
      console.log(counter)
    }
  }
  

  return (
    <>
      <h1>Hello World</h1>
      <button onClick={add}>Add Counter: {counter}</button>
      <button onClick={remove}>Remove Counter: {counter}</button>
    </>
  )
}

export default App
