import { useState } from "react";
import { produce ,pantryItems} from "./StoreItems";
import ItemList from "./ItemList";

function GroceryCart(){

    const [cart,setCart]=useState([]);

    const addItem=(item)=>{
        setCart((prev)=>{
            return [item,...prev]
        })
    }

    const removeItem=(targetIndex)=>{
        setCart((prev)=>{
             return prev.filter((item,index)=> index!==targetIndex)
        })
    }

    return(
        <div>
            <h1>Grocery Cart</h1>
            <ul className=" list-disc ml-6 hover:cursor-pointer  ">
                {
                    cart.map((item,index)=>(
                        <li onClick={()=>removeItem(index)} key={index} title={`Remove ${item}`}>{item}</li>
                    ))

                }
            </ul>

            <h1>Produce</h1>
            <ItemList items={produce} onItemClick={addItem}/>

            <h1>Pantry</h1>
            <ItemList items={pantryItems} onItemClick={addItem}/>
           
        </div>
    )




}

export default GroceryCart;