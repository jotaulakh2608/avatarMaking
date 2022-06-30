import React, { useEffect, useState } from "react";

export const Counter = (props) => {
    const [minute, setminute] = useState(props.min)
    const [second, setsecond] = useState(props.sec)
    const [milisecond, setmilisecond] = useState(props.ms)
    
    // setTimeout(function() {
    //   if (minute > 0) {
    //     setminute( minute - 1 );
    //   }
    // },60000);
    
    // setTimeout(function() {
    //   if (second > 0) {
    //     setsecond( second - 1 );
    //   }

    // }, 1000);
    // setTimeout(function() {
    //   if (milisecond > 0) {
    //     setmilisecond( milisecond - 1 );
    //   }
    // }, -10000);
    useEffect(()=>{
        let myInterval = setInterval(() => {
                if (second > 0) {
                    setsecond(second - 1);
                }
                if (second === 0) {
                    if (minute === 0) {
                        clearInterval(myInterval)
                    } else {
                        setminute(minute - 1);
                        setsecond(59);
                    }
                } 
                if (milisecond === 0) {
                    if (second === 0) {
                        clearInterval(myInterval)
                    } else {
                        setsecond(second - 1);
                        setmilisecond(999);
                    }
                } 
            }, 1000)
      
            
            return ()=> {
                clearInterval(myInterval);
               
              };
        });
  return (
    <div class="grid grid-flow-col gap-5 text-center h-20 auto-cols-max">
      <div class="flex flex-col p-2 bg-neutral w-32 rounded-box text-neutral-content">
        <span class=" font-mono text-5xl">
          <span > {minute}</span>
        </span>
       min
      </div> 
      <div class="flex flex-col p-2 bg-neutral w-32 rounded-box text-neutral-content">
        <span class=" font-mono text-5xl">
          <span > {second}</span>
        </span>
       sec
      </div> 
      <div class="flex flex-col p-2 bg-neutral w-32 rounded-box text-neutral-content">
        <span class=" font-mono text-5xl">
          <span > {milisecond}</span>
        </span>
       ms
      </div> 
      
      
     
    </div>
  )
}


  
  class Display extends React.Component {
    render () {
      return <div className="flex">
         
        <Counter min={1} sec={60} ms={1000} />
        
      </div>
      ;
    }
  }
  export default Display 