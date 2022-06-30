import React, { useState } from 'react'
import { Job } from '../components/Job'
import { Range } from '../components/Range'


export const Filter = () => {
    
    const [show, setshow] = useState(false)
    const handleShow =()=>{

        setshow(!show)
        // if(show===true){

        //     document.body.style.backgroundColor= 'white'
        // }
        // else{
        //     document.body.style.backgroundColor= '#ebedef'
        // }
    }
    const data = [
        {
            id:1, 
            Job:"Full Time"
        },
        {
            id:2, 
            Job:"Part Time"
        },
        {
            id:3, 
            Job:"Remote/Contract"
        },
        {
            id:4, 
            Job:"Freelance"
        },
        {
            id:5, 
            Job:"Internship"
        },
        {
            id:6, 
            Job:"Commission"
        },
        
    ]
  return (
    <div className='h-screen body bg-[#ebedef] '>
    <div className="pt-2">

    <div onClick={handleShow} className="flex ml-2 mt-5   bg-[#ea6164] cursor-pointer h-8 w-8 justify-center items-center rounded-lg">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
</svg>
    </div>
    </div>
{show?<div className="flex flex-col bg-white h-[550px] border-2 border-gray-200 rounded-3xl p-4 w-[360px] bb relative top-3 left-2  ">

<div className="h-12  flex justify-between items-center ">

<h1>
    Salary Range
</h1>
<div className="flex items-center border h-8 w-20 justify-center border-gray-300 rounded-md">
     <h1>
         Yearly
     </h1>
     <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
</svg>
</div>
</div>

<div className="h-20 bb">

</div>
<div className="h-36 my-5 ">

<h1 className='font-bold mb-4'>
    Job Type
</h1>

<div className="grid grid-cols-3 gap-y-3  w-[300px] ">
{
    data.map(job=>(
        <Job job={job} key={job.id}  />
  
    ))
}
</div>

</div>

<div className="h-44">
<h1 className='font-bold mb-4'>
    Experience level
</h1>


<div class="text-center grid grid-cols-2 ">

  <div class="flex items-center mr-4 mb-4">
    <input id="radio1" type="radio" name="radio" class="hidden"  />
    <label for="radio1" class="flex items-center cursor-pointer">
     <span class="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
     Entry Level</label>
   </div>

   <div class="flex items-center mr-4 mb-4">
    <input id="radio2" type="radio" name="radio" class="hidden" />
    <label for="radio2" class="flex items-center cursor-pointer">
     <span class="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
     Mid Level</label>
   </div>
  
    <div class="flex items-center mr-4 mb-4">
    <input id="radio3" type="radio" name="radio" class="hidden" />
    <label for="radio3" class="flex items-center cursor-pointer">
     <span class="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
     Senior Level</label>
   </div>
 
 <div class="flex items-center mr-4 mb-4">
    <input id="radio4" type="radio" name="radio" class="hidden" />
    <label for="radio4" class="flex items-center cursor-pointer">
     <span class="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
     Manager Level</label>
   </div>
 
 <div class="flex items-center  mb-4">
    <input id="radio5" type="radio" name="radio" class="hidden" />
    <label for="radio5" class="flex items-center cursor-pointer">
     <span class="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
     Sr.Manager Level</label>
   </div>
 

 </div>


</div>

<div className="flex items-center bb h-20">


<button className='bg-[#ea6164] text-white rounded-lg h-14 w-full'>
    Show Results  
</button>

<h1 className='w-20 justify-center items-center flex text-gray-400 text-lg'>
    Clear
</h1>


</div>
</div>:null}


    </div>
  )
}
