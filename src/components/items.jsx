import React, { useState } from 'react'

export const Items = (props) => {
    const data = props.data
    const {count,selected,setSelected,setCount, remove,} = props
    
  
    const [isActive, setIsActive] = useState(false);
  
    
  const handleClick = (id) => {
    
    setIsActive(!isActive);
    if(isActive===true){
      
        setCount(count - 1 )
    }


    
  };
  function category(){
      if(isActive===false){
        
          setCount(count+1);
          setSelected(prevState=>[prevState + prevState.push(data.name)] );
      }



  };

  return (
    <div onClick={() => { category(); handleClick(data.id);  remove(data.id)}} style={{
        backgroundColor: isActive ? 'salmon' : '',
        color: isActive ? 'white' : '', 
      }}   className="my-1 font-bold  flex w-20 border   border-gray-500 rounded-lg px-3 py-1 justify-center mx-1 active:border-blue-900 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" class={`${isActive?'flex':"hidden h-6 w-6"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
</svg><h1 >{data.name}</h1> 
      </div>
  )
}
