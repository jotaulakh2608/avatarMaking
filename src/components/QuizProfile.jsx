import React, { useEffect, useState } from 'react'
import { BadgesQuiz } from '../components/BadgesQuiz'

import { data } from '../data/JsonQuiz'

export const QuizProfile = ({name}) => {

// const [quizData, setquizData] = useState(null)


    // useEffect(() => {
    // fetch('http://localhost:3007/quiz')
    // .then(res =>
    //    {return res.json()})
    //    .then((data)=>{
           
    //        setquizData(data)
    //    }

    //    )
           
    // }, [])

    useEffect(() => {
     window.localStorage.getItem('name')
    }, [])
    
    
  return (
    < >
    
    
   
   
       
  
  
 
    
   

    </>
  )
}
