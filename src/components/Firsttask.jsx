import React, { useState } from 'react'


export default function Firsttask() {

const data =[
  {id:"1",
  name:'cat1',
},
  {id:"2",
  name:'cat2',
},
  {id:"3",
  name:'cat3',
},
  {id:"4",
  name:'cat4',
},
  {id:"5",
  name:'cat5',
},
  {id:"6",
  name:'cat6',
},
  {id:"7",
  name:'cat7',
},
]

const [count, setCount] = useState(0);
const [selected, setSelected] = useState([]);
console.log(selected);
const remove = (id)=>{
 

    // const neww = selected.filter((selected)=>selected.id!==id)
    // setSelected(neww)
  
}

  return (
    <>
      
      <div className=" border rounded-lg border-3 p-2 border-black w-96  my-44 mx-auto flex flex-wrap justify-center">
        <div className='text-center w-full'><h className="mx-18 text-lg font-bold">Filter By Category</h>
        <span className='m-2 justify-end'>Selected {count}/7</span></div>
        {data.map(data =>(
          <Items data={data} key={data.id} count={count} selected={selected }  remove={remove} setSelected={setSelected} setCount={ setCount} />
        ))}
       
       
        <div className='my-auto mx-auto block w-96'>
        <div  className="my-1   border  border-gray-300 rounded-lg px-3 py-1 justify-center mx-1 active:border-blue-900 cursor-pointer">
          {selected}
        </div>

    </div>
        </div>
    </>
  )
}

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
