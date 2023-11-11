import { useState } from "react"


function Counter(){

    const [counter ,setCounter]=useState(0)

    const add=()=>{
        setCounter((prevCount)=>prevCount+1)
    }
    
    const remove=()=>{
        setCounter((prevCount)=>prevCount-1)
    }
    return(
        <>
            <button className="rounded-md text-white bg-green-300 w-40 h-[40px] m-2" onClick={add} >Add Counter: {counter}</button>
            <button className="rounded-md text-white bg-green-300 w-40 h-[40px]" onClick={remove}>Remove Counter: {counter}</button>
        </>
    )
}
export default Counter;