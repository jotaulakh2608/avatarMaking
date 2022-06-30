import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const    MainCard = ({setmainImage, mainImage}) => {
    
    const [name, setname] = useState(0)
const [show, setshow] = useState(false)

const showHide =()=>{
    setshow(!show)
}

useEffect(() => {
 
   
  setname(window.localStorage.getItem('name'))

}, [])
useEffect(() => {
 
    window.localStorage.setItem('name', name)

}, [])


  return (
     <div className='h-screen w-full '>
     <div className="flex w-full  ">
     <div className=" hidden lg:flex">

         <Sidebar/>
     </div>
    <div className="flex flex-col w-full">

<div className="h-20 lg:m-4 m-0  flex items-center  lg:justify-end pr-5">
<div className={`${show?"flex flex-col relative top-[61px] left-[2px]":"flex flex-col relative top-0"}`}>
<button onClick={showHide} className='border-2 border-[#2d2844] h-10 w-24  text-[12px] rounded-lg'>
Name
</button>   
{show?<div className="flex border rounded-lg border-[#2d2844] flex-col top-6">

{data.map(data=>(
    <button onClick={()=>setname(data.id)} className=' h-10 w-24 hover:bg-[#2d2844] hover:text-white  text-[12px] rounded-lg'>
{data.username}
</button>

))}
</div> :null}


</div>
<Link to='/quiz'>

<button className='bg-[#2d2844] h-10 w-24 rounded-lg text-[12px] text-white ml-3'>
Start Quiz
</button>
</Link>

<div className="flex items-center  ">
<div className="rounded-full border text-[12px] relative z-50 left-6 bg-white text-gray-300 border-gray-300 h-6 w-6 flex items-center justify-center">
    +3
</div>
    <img src="https://i.redd.it/snoovatar/snoo_assets/runways/l7ZSjweYdUA_avatar_60678560.jpg" className='rounded-full h-8 w-8 relative  left-4' alt="" />
    <img src="https://i.redd.it/snoovatar/snoo_assets/runways/CIWKiCY7py4_avatar_60680747.jpg" className='rounded-full h-8   w-8 relative  left-2 ' alt="" />
    <img src="https://i.redd.it/snoovatar/snoo_assets/runways/HLR0GfGDfTo_avatar_60679866.jpg" className='rounded-full h-8 w-8' alt="" />
</div>

</div>
<div className="lg:h-56 h-72  m-4 flex flex-col lg:flex-row items-center lg:px-8  ">
<div className="">
<img src={mainImage} className='h-40 w-40 rounded-lg lg:mr-10' alt=""/>

</div>

<div className="lg:px-10 w-full">

<div className="  ">
    <h1 className="font-bold text-xl">
    {data[name].username}
    </h1>
    <h2 className='text-[12px] mb-2 text-gray-200 font-bold '>
      Bonus  Booster
    </h2>
    <h2 className="text-gray-300 ">
        {data[name].coinsPython}/1200 XP
    </h2>
    <div class=" w-full bg-gray-200 h-2 rounded-full mb-6">
  <div className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 h-2 rounded-full" style={{width: data[name].width}}></div>
</div>
<div className="flex">
    <div className="flex w-full justify-between">
    <div className="flex">

        <div className="flex h-10 rounded-lg w-10  items-center mr-2 justify-center shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clip-rule="evenodd" />
</svg>
        </div>
        <div className="">
            <h1 className='font-bold text-xl'>
            {data[name].gamesWin}
            </h1>
            <h2 className='text-[12px] text-gray-200 font-bold '>
Games Win
            </h2>
        </div>
    </div>
    <div className="flex">

        <div className="flex h-10 rounded-lg w-10  items-center mr-2 justify-center shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clip-rule="evenodd" />
</svg>
        </div>
        <div className="">
            <h1 className='font-bold text-xl'>
            {data[name].coinsPython}
            </h1>
            <h2 className='text-[12px] text-gray-200 font-bold '>
Highest Score
            </h2>
        </div>
    </div>
    <div className="flex">

        <div className="flex h-10 rounded-lg w-10  items-center mr-2 justify-center shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
</svg>
        </div>
        <div className="">
            <h1 className='font-bold text-xl'>
            {data[name].CorrectAnswers}
            </h1>
            <h2 className='text-[12px] text-gray-200 font-bold '>
Correct Answers
            </h2>
        </div>
    </div>
    </div>
</div>
</div>
</div>


</div>
<div className="flex shadow-lg rounded-2xl flex-col h-[300px]   p-5  bb   px-3 m-5">
     
     <div className="flex  justify-between items-center p-5 h-12 bb">
      
             <h1 className="text-2xl base font-bold">
                Education 
             </h1>

             <h2>

             </h2>
 
         </div>
 
         <div className="grid grid-cols-3 justify-center items-center pl-4 bb h-full">
       
         <div className="">
            <h1 className="text-gray-500">
                Gender
            </h1>
            <h2 className="text-[12px]" >
               Female
            </h2>
         </div>
         <div className="">
            <h1 className="text-gray-500">
                Street Adress
            </h1>
            <h2 className="text-[12px]" >
                Ji, Diporego No.21
            </h2>
         </div>
         <div className="">
            <h1 className="text-gray-500">
                Member Status
            </h1>
            <h2 className="text-[12px]" >
                Active
            </h2>
         </div>
         <div className="">
            <h1 className="text-gray-500">
                Birthday
            </h1>
            <h2 className="text-[12px]" >
               Feb 24th, 1997
            </h2>
         </div>
         <div className="">
            <h1 className="text-gray-500">
                City
            </h1>
            <h2 className="text-[12px]" >
                Cigthyl
            </h2>
         </div>
         <div className="">
            <h1 className="text-gray-500">
               Registered Date
            </h1>
            <h2 className="text-[12px]" >
                March 21th, 1997
            </h2>
         </div>
         <div className="">
            <h1 className="text-gray-500">
                Phone Number
            </h1>
            <h2 className="text-[12px]" >
               76213908723
            </h2>
         </div>
         <div className="">
            <h1 className="text-gray-500">
               ZIP Code
            </h1>
            <h2 className="text-[12px]" >
                140603
            </h2>
         </div>
         <div className="">
            <h1 className="text-gray-500">
               District
            </h1>
            <h2 className="text-[12px]" >
                Moahli
            </h2>
         </div>
         </div>
         
 </div>
<div className=" flex flex-col lg:flex-row  p-10 bb m-4 ">
<div className="flex shadow-lg rounded-2xl flex-col h-[300px]  p-5  bb   px-3 mr-5">
     
    <div className="flex  justify-between items-center p-5 h-12 bb">
        <div className="flex">
            <h1 className="text-base font-bold">
                Achievements
            </h1>
<div className="flex items-center justify-center  h-6 w-6 rounded-md ml-2  bg-[#f2f2f2]">
<h2 className='text-base'>
                8
            </h2>
</div>        
        </div>
        <div className="flex w-56 items-center">
        <h2 className="text-gray-300 w-full ml-auto">
        {data[name].coinsPython}/1200 XP
    </h2>
        <div class="w-full bg-gray-200 h-2 rounded-full ">
  <div className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 h-2 rounded-full" style={{width: data[name].width}}></div>
</div>
        
    </div>
        </div>

        <div className="flex items-center justify-center   bb h-full">
        <div className="flex flex-col items-center text-xl mr-2  w-[500px]" >
     
     <BadgesQuiz data={data} name={name}/>
</div>
        </div>
        <div className="border-t-2 flex items-center justify-center  pt-5 text-gray-200 font-bold text-[12px] text-center border-gray-200">
            View All
        </div>
</div>
<div className="flex shadow-lg rounded-2xl flex-col h-[300px]  p-5 w-full  bb  px-3">
     
     <div className="flex  justify-between items-center py-5 h-12 bb">
         <div className="flex">
             <h1 className="text-base font-bold">
               Inventory
             </h1>
 <div className="flex items-center justify-center  h-6 w-6 rounded-md ml-2  bg-[#f2f2f2]">
 <h2 className='text-base'>
                 4
             </h2>
 </div>        
         </div>
         <div className="flex w-32 items-center">
         <h2 className="text-gray-300 w-full ">
         5/10 XP
     </h2>
         <div class="w-full bg-gray-200 h-2  rounded-full ">
   <div className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 h-2 rounded-full" style={{width: "30%"}}></div>
 </div>
         
     </div>
         </div>
 
         <div className="flex items-center justify-center flex-col    bb h-full">
             <img src="https://img.icons8.com/arcade/344/experimental-shield-arcade.png " className='h-28 w-28' alt="" />
             <h2 className='font-bold'>
             {data[name].questionsAttempt}/50
             </h2>
         </div>
         <div className="border-t-2 flex items-center  pt-5 justify-center  text-gray-200 font-bold text-[12px]  border-gray-200">
             View All
         </div>
 </div>

</div>
<div className="flex shadow-lg rounded-2xl flex-col h-[100px] w-   items-center justify-center  bb    m-4">
     
            <h1 className="text-3xl font-bold">
                Certificate
             </h1>
        
         
      
         
 
         
         
 </div>
    </div>
     </div>


    </div>
  )
}


export const BadgesQuiz = ({data,name}) => {

    const [coins, setcoins] = useState(data[name].coinsPython)
  
    useEffect(() => {
  setcoins(data[name].coinsPython)
    }, [name])
    
  console.log(coins);
    return (
      
         
              <div className="flex  justify-evenly items-center w-full">
              
              <h2 className='mr-2' >
                 {coins>=200?<div className="flex flex-col items-center"><img src="https://assets.dryicons.com/uploads/icon/svg/6439/6a8668eb-164c-4e75-b8b0-08e23303978c.svg"  className='h-20 w-20 ' alt="" /> <h2 className='font-bold'>
                 200+
               </h2></div>:null} 
                  </h2>
              
             
                 
            
                  <h2 className='mr-2'>
                  {coins>=400?  <div className="flex flex-col items-center"><img src="https://assets.dryicons.com/uploads/icon/svg/6438/dd5bc661-77be-49cf-8334-a89c90138180.svg"  className='h-20 w-20 'alt="" /> <h1 className='font-bold'>
  400+
                  </h1></div>:null}
                  </h2>
                  
                  
                 
                  
                  <h2 className='mr-2'>
                  {coins>=600?<div className="flex flex-col items-center"><img src="https://assets.dryicons.com/uploads/icon/svg/6440/1788cade-d16c-46ac-a82a-a505f37d6c6d.svg" className='h-20 w-20 ' alt="" /> <h1 className='font-bold'>
  600+
                  </h1></div>:null}
                  </h2>
                 
                  
                 
                  
                  <h2 className='mr-2'>
                  {coins>=800?<div className="flex flex-col items-center"><img src="https://assets.dryicons.com/uploads/icon/svg/6441/947aedac-9971-42f6-b407-d80559ebb57b.svg" className='h-20 w-20 ' alt="" /> <h1 className='font-bold'>
  800+
                  </h1></div>:null}
                  </h2>
                 
                  
                  
              </div>
        
    )
  }
  
  export const data = [
     
    {
      "id": 0,
      "username": "Ankur",
      "categoryPython": "Python",
        "coinsPython":"1000",
      "categoryJava": "python",
        "coinsJava":"1000",
        width:'95%',
        gamesWin:'28',
        CorrectAnswers:'220',
        questionsAttempt:'45',
      "Eligible": true

      },
   
    {
      "id": 1,
      "username": "Johny",
      "categoryPython": "Python",
        "coinsPython":"400",
      "categoryJava": "python",
        "coinsJava":"1000",
        width:'40%',
      gamesWin:'15',
      CorrectAnswers:'150',
      questionsAttempt:'22',
      "Eligible": true

      },
   
    {
      "id": 2,
      "username": "Diljot",
      "categoryPython": "Python",
        "coinsPython":"600",
      "categoryJava": "python",
        "coinsJava":"1000",
        width:'60%',
        gamesWin:'20',
        CorrectAnswers:'190',
questionsAttempt:'35',
      
      "Eligible": true

      },
   
        
        
    
]

export const Sidebar = () => {
    return (
      <div>
      <aside class="w-64" aria-label="Sidebar">
      <div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
      <ul class="space-y-2">
      <li>
      <a href="/" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white bg-gray-300 dark:hover:bg-gray-700">
      
      <span class="ml-3 text-center  font-bold text-xl">Evently</span>
      </a>
      </li>
      <li>
      <a href="/" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
      <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
      <span class="flex-1 ml-3 whitespace-nowrap">Kanban</span>
      <span class="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
      </a>
      </li>
      <li>
      <a href="/" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
      <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
      <span class="flex-1 ml-3 whitespace-nowrap">Inbox</span>
      <span class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-white bg-[#4541dc] rounded-full dark:bg-blue-900 dark:text-blue-200">3</span>
      </a>
      </li>
      <li>
      <a href="/" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
      <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
      <span class="flex-1 ml-3 whitespace-nowrap">Users</span>
      </a>
      </li>
      <li>
      <a href="/" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
      <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
      <span class="flex-1 ml-3 whitespace-nowrap">Products</span>
      </a>
      </li>
      <li>
      <a href="/" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
      <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path></svg>
      <span class="flex-1 ml-3 whitespace-nowrap">Sign In</span>
      </a>
      </li>
      <li>
      <a href="/" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
      <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd"></path></svg>
      <span class="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
      </a>
      </li>
      </ul>
      <ul class="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
      <li>
      <a href="/" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
      <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white dark:text-gray-400" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="gem" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M378.7 32H133.3L256 182.7L378.7 32zM512 192l-107.4-141.3L289.6 192H512zM107.4 50.67L0 192h222.4L107.4 50.67zM244.3 474.9C247.3 478.2 251.6 480 256 480s8.653-1.828 11.67-5.062L510.6 224H1.365L244.3 474.9z"></path></svg>
      <span class="ml-4">Pro</span>
      </a>
      </li>
      <li>
      <a href="/" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
      <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path></svg>
      <span class="ml-3">Documentation</span>
      </a>
      </li>
      <li>
      <a href="/" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
      <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path></svg>
      <span class="ml-3">Components</span>
      </a>
      </li>
      <li>
      <a href="/" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
      <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clip-rule="evenodd"></path></svg>
      <span class="ml-3">Help</span>
      </a>
      </li>
      </ul>
      </div>
      </aside>
      </div>
    )
  }
  