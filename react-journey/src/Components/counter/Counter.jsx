import { useState } from "react"


function Counter(){
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



    
    return(
        <>
            <button onClick={add}>Add Counter: {counter}</button>
            <button onClick={remove}>Remove Counter: {counter}</button>
        </>
    )
}
export default Counter;