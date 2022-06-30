import React, { useState } from 'react'
import ReactPlayer from 'react-player'

export const YoutubeLink = () => {
    const [src, setsrc] = useState('')
    
    const [src2, setsrc2] = useState([])
    console.log(src2);

   const handleSubmit =(e)=>{
    e.preventDefault()

    const data = src

    if(src){
setsrc2((prev)=>[...prev, data])
setsrc('')
    }

   }
     return (
    <div className='flex items-center justify-center  h-full'>

<div className="flex flex-col h-full w-[400px] p-5 bb">


<form className="h-36 flex flex-col items-center justify-center  " onSubmit={handleSubmit}>

<button>

<svg xmlns="http://www.w3.org/2000/svg"  class="h-16 w-16" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
</svg>
</button>

<input type="text" name="" value={src} onChange={(e)=>setsrc(e.target.value)}  className='border border-gray-400 h-12 w-72 placeholder:text-center ' id="" placeholder='Add your youtube files here' />
</form>


{src2?<div className=" grid grid-cols-2 items-center justify-center mx-auto  gap-8  ">
{src2.map(src=>(

<ReactPlayer
    url={src} width="150px " height="150px"
/>
))}

</div>:null}




</div>
        
    </div>
  )
}
