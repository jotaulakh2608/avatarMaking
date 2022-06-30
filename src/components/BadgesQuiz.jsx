import React, { useEffect, useState } from 'react'

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
