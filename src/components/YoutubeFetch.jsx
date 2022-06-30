// import React, { useEffect, useState } from 'react'


// export const YoutubeFetch = () => {


//     const API_KEY = "AIzaSyAPFdCmyYf3T1i45hApa-9-zjeFXt2ZE8U"

//     const [url, seturl] = useState(null)

// const [subscribers, setsubscribers] = useState(null)

// const youtubeFetch = require('')


// const handleChange=(e)=>{
// seturl(e.target.value)
// }

// const handleSubmit = async (e)=>{
//     e.preventDefault()

//     const result = await youtubeFetch(url)
//     console.log(result);
//     if (result ) {
//         if (result.error) {
//           console.log(`Have a error, try again`);
//         } else {
//           console.log(`Channel ID: ${result.id}`);
//         }
//       } else {
//         console.log('Invalid youtube channel URL');
//       }
// }

//   return (
//     <div className='flex justify-center items-center flex-col h-screen'>
//     <div className="flex flex-col">
//     <form onSubmit={handleSubmit}>

//     <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
//     <input type="text" id="email" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Channel URL" required onChange={handleChange} value={url}  />
   
//     <button  href="/" class="font-medium bg-black text-white h-8 w-16  dark:text-blue-500">Privacy </button>
//     </form>

//     </div>
//     </div>
//   )
// }
