import React, { useState } from 'react'

export const Job = (props) => {
    const [active, setactive] = useState(false)
    const handleActive =()=>{
        setactive(!active)
    }

    const job = props.job
  
  return (
    <div onClick={handleActive}  className={`${active?"flex bg-[#ea6164]   h-8 p-3 justify-center items-center w-fit text-[14px] rounded-md text-white":'flex bg-[#eef2f5]  h-8 p-3 justify-center items-center w-fit text-[14px] rounded-md text-gray-400 '}`}>
{job.Job}
    </div>
  )
}
