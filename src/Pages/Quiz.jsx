import React, { useEffect, useState } from 'react'

    import 'simple-react-donut-chart/src/style.css'
import '../index.css';
import QuestionQuiz from '../components/QuestionQuiz';
import Display from '../components/Countdown';




const questions = [
  {
    question: "React.js is a free and open-source front-end .....",
    quizoptns: [
      { answer: "JavaScript library", color:"linear-gradient(90deg, rgba(100,83,241,1) 0%, rgba(149,81,243,1) 35%, rgba(231,62,183,1) 100%)", isAnswer: true, clicked: false, alphabet:"A" },
      { answer: "Bootstrap library", color:" linear-gradient(90deg, rgba(180,82,82,1) 0%, rgba(208,47,74,1) 54%, rgba(162,53,131,1) 100%)",isAnswer: false, clicked: false  ,alphabet:"B"},
      { answer: "CSS library", color:" linear-gradient(90deg, rgba(180,82,82,1) 0%, rgba(208,47,74,1) 54%, rgba(162,53,131,1) 100%)",isAnswer: false, clicked: false  ,alphabet:"C"},
      { answer: "None of the Above", color:" linear-gradient(90deg, rgba(180,82,82,1) 0%, rgba(208,47,74,1) 54%, rgba(162,53,131,1) 100%)",isAnswer: false, clicked: false ,alphabet:"D" },
    ],
    answered: false
  },
  {
    question: "React.js was Initially released in....",
    quizoptns: [
      { answer: "April 29, 2013", color:" linear-gradient(90deg, rgba(180,82,82,1) 0%, rgba(208,47,74,1) 54%, rgba(162,53,131,1) 100%)",isAnswer: false, clicked: false ,alphabet:"A" },
      { answer: "May 29, 2013", color:"green",isAnswer: true, clicked: false ,alphabet:"B" },
      { answer: "June 29, 2013", color:" linear-gradient(90deg, rgba(180,82,82,1) 0%, rgba(208,47,74,1) 54%, rgba(162,53,131,1) 100%)",isAnswer: false, clicked: false  ,alphabet:"C"},
      { answer: "May 29, 2014", color:" linear-gradient(90deg, rgba(180,82,82,1) 0%, rgba(208,47,74,1) 54%, rgba(162,53,131,1) 100%)",isAnswer: false, clicked: false  ,alphabet:"D"},
    ],
    answered: false
  },
  {
    question: "What is Babel?",
    quizoptns: [
      { answer: "A JavaScript transpiler", color:" linear-gradient(90deg, rgba(180,82,82,1) 0%, rgba(208,47,74,1) 54%, rgba(162,53,131,1) 100%)",isAnswer: false, clicked: false ,alphabet:"A" },
      { answer: "A JavaScript interpreter", color:" linear-gradient(90deg, rgba(180,82,82,1) 0%, rgba(208,47,74,1) 54%, rgba(162,53,131,1) 100%)",isAnswer: false, clicked: false  ,alphabet:"B"},
      { answer: "A JavaScript Compiler", color:"green",isAnswer: true, clicked: false ,alphabet:"C" },
      { answer: "None Of the above", color:" linear-gradient(90deg, rgba(180,82,82,1) 0%, rgba(208,47,74,1) 54%, rgba(162,53,131,1) 100%)",isAnswer: false, clicked: false ,alphabet:"D" },
    ],
    answered: false
  },
]

const Quiz = () => {
  const mystyle = {display:'none'}
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAns, setCorrectAns] = useState(0);
  const [wrongAns, setWrongAns] = useState(0);
  const [timer, setTimer] = useState(30)

  const handleAns = (isAns, index) => {
    questions[currentQuestion].quizoptns[index].clicked = true;
    questions[currentQuestion].answered = true;
    if (isAns) {
      setCorrectAns(correctAns + 1);
    } else {
      setWrongAns(wrongAns + 1);
    }
  }

  const nextQuiz = () => {
    if (currentQuestion === questions.length - 2) {
      document.getElementById('nextQuiz').disabled = true;
    } else if (currentQuestion === 0) {
      document.getElementById('prevQuiz').disabled = false;
    }
    setCurrentQuestion(currentQuestion + 1);
  }

  const prevQuiz = () => {
    if (currentQuestion === questions.length - 1) {
      document.getElementById('nextQuiz').disabled = false;
    } else if (currentQuestion === 1) {
      document.getElementById('prevQuiz').disabled = true;
    }
    setCurrentQuestion(currentQuestion - 1);
  }

  // useEffect(() => {
  //   document.getElementById('prevQuiz').disabled = true;
  // }, [])

  return (
    <>
      <div className=" flex flex-col h-screen w-full bg-[#ded5ec] justify-center items-center " >
        {/* <div className="headSection">
          <div className="answerBar">
            <div className="PercBar">
              <span className="total">
                <div className="perc" style={{ width: `${(correctAns / questions.length) * 100}%`, backgroundColor: 'green' }}></div>
              </span>
              <div className="totalCount">
                {correctAns}/{questions.length}
              </div>
            </div>
            <div className="PercBar">
              <span className="total">
                <div className="perc" style={{ width: `${(wrongAns / questions.length) * 100}%`, backgroundColor: 'red' }}></div>
              </span>
              <div className="totalCount">
                {wrongAns}/{questions.length}
              </div>
            </div>
          </div>
          <div className="TimerAndStatus">
            <div className="Timer">{timer}</div>
            <div className="showQuestionNumber">{currentQuestion + 1}/{questions.length}</div>
          </div>
        </div> */}

      


<div className="flex flex-col bb h-screen  w-[800px] ">

<div className="flex bb w-full h-36">

<Display/>

</div>


<div className="flex flex-col bb h-72 w-full">

<div className="lowerSection">
          <QuestionQuiz handleAns={handleAns} quiz={questions[currentQuestion]} />
          
        </div>
</div>

<div className="flex bb w-full h-20">

<div className="flex justify-between items-center  w-full">
            <button className="bb h-8 " id='prevQuiz' onClick={prevQuiz}>&larr; Previous</button>
            <button className="bb h-8 " id='nextQuiz' onClick={nextQuiz}>Next &rarr;</button>
          </div>
</div>

</div>



      </div>
    </>
  )
}

export default Quiz