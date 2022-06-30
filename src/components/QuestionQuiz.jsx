import React from 'react'
import './QuestionQuiz.css'

const QuestionQuiz = (props) => {
    const { question, quizoptns } = props.quiz;

    return (
        <div className='flex flex-col '>
            <div className="flex mb-5">
                <h1 className='text-2xl font-bold '>{question}</h1>
            </div>
            {quizoptns.map((quizOpt, index) => {
                return <button key={index} onClick={() => { props.handleAns(quizOpt.isAnswer, index) }} className=" pl-2 flex mb-2 rounded-lg items-center jus bg-white w-56 shadow-md h-12" disabled={quizOpt.clicked || props.quiz.answered} style={{ background: quizOpt.clicked ? `${quizOpt.color}` : 'white' ,color: quizOpt.clicked ? `white` : 'black' }} > <h1 style={{color: quizOpt.clicked ? `white` : 'black',background: quizOpt.clicked ? `#7a71ef` : '#becceb'}} className='mr-2 rounded-full flex items-center justify-center text-[#638ad0] h-6 w-6 '>{quizOpt.alphabet}</h1> <h1>{quizOpt.answer}</h1></button>
            })}
        </div>
    )
}

export default QuestionQuiz