import React,{useState} from "react";

function ColorPicker(){

    const colorNames=[ 'Aquamarine' ,'BlueViolet', 'Chartreuse', 'CornflowerBlue','Thistle', 'SpringGreen', 'SaddleBrown', 'PapayaWhip', 'MistyRose']

    const[color,setColor]=useState("white");

    document.body.style.backgroundColor=color


    return(

        <div className="flex justify-center i">
            <div>
            <h1 className="text-center">The color of Body is {color}</h1>
            {
                colorNames.map((colors)=>(
                    <button className="rounded-md bg-black text-white w-40 h-30 m-1" onClick={()=>setColor(colors)}>{colors}</button>
                    )
                )
            }
            </div>
                
        </div>
    )
}

export default ColorPicker;