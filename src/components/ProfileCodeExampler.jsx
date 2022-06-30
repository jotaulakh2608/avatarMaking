import React from 'react'
import { Link } from 'react-router-dom'

export const Profile = ({profile}) => {
  return (
    <div className="flex justify-center items-center h-screen">


    <div className="flex flex-col bg-white h-96 px-4 w-80 items-center">
    
    <div className="bg-[#33a8ff]  h-24 fixed z-0 w-80"></div>
   
    
    <div className=" ">
        <img src={profile} className={ profile==="https://i.ibb.co/VHVbzMK/Screenshot-80-removebg-preview.png" ?'h-36 mt-5  z-50 relative ':'h-44 z-50 relative   ' }alt="" />
    </div>
    <div className=" w-full items-center flex  flex-col -translate-y-5">
<div className="mb-3">
<h1 className='text-xl  '>
        Code Exampler
    </h1>
    <h2>
    u/CodeExampler · 9m
    </h2>
</div>
   
    <Link to='/profileEdit' className='w-full'>

    <button  className='rounded-full button h-8 w-full mb-2   text-white flex items-center justify-center'>
    
    <h1 className='font-bold text-sm'>
        Create Your Own Avatar
    </h1>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
    </svg>
    </button>
    </Link>
    
    <div className="flex justify-between w-full  mb-2">
          <div className="">
            <h1 className='text-black text-sm font-bold'>
              Karma
            </h1>
            <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-[#33a8ff] mr-1" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clip-rule="evenodd" />
      
    </svg>
    <h2>
        1
    </h2>
            </div>
          </div>
          <div className="">
            <h1 className='text-black text-sm font-bold'>
              Cake Day
            </h1>
            <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-[#33a8ff]  mr-1" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
    </svg>
    <h2>
    September 17, 2021
    </h2>
            </div>
          </div>
        </div>
    
        <button  className='rounded-full bg-[#0079d3] h-8 w-full text-white flex items-center justify-center'>
    
    <h1 className='font-bold text-sm'>
        Follow
    </h1>
    
    </button>
    <div className="items-start place-items-end mr-auto flex w-full">
    
    <h2 className='text-[#1383d6]   '>
    More Options
    </h2>
    </div>
    </div>
    
    
    </div>
    
    </div>

  )
}
