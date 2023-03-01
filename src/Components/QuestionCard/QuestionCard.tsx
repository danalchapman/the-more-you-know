import { useState } from "react"
import { Question } from '../../model'
import './QuestionCard.css'

export const QuestionCard = ({ id, question, answer }: Question) => {

    const [clicked, setClicked] = useState<boolean>(false)

    const showAnswer = (id: string) => {
        setClicked(true)
    }
    
    const hideAnswer = (id: string) => {
        setClicked(false)
    }
    
    const text = clicked ? answer : 'Click here for the Answer'

    return (
        <div className='question-card'>
            <h3>Question {id}</h3>
            <p>{question}</p>
            <button
                className='answer-btn'
                onClick={ clicked ? () => hideAnswer(id) : () => showAnswer(id) }
            >{ text }</button>
        </div>
    )
}