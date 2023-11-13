

function ItemList({items,onItemClick}){

    const handleClick=({target})=>{
        const item=target.value;
        onItemClick(item)
    }

    return (
        <div>
            {
                items.map((item,index)=>(
                    <button className="rounded-md bg-gray-400 text-white w-40 h-30 m-1" onClick={handleClick} key={index} value={item}>{item}</button>
                ))
            }
        </div>
    )

}

export default ItemList;