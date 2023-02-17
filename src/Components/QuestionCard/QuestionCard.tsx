// import { useState } from "react"
import { Question } from '../../model'
import './QuestionCard.css'

export const QuestionCard = ({ id, question, answer }: Question) => {
    // need to pass props from QuestionsBox
    // ternary for the button 
    // clicked ? question.answer : 'Click Me For The Answer'

    // const [clicked, setClicked] = useState<boolean>(false)

    return (
        <article>
            <h3>Question {id}</h3>
            <p>{question}</p>
            <button>Click Me For the Answer</button>
        </article>
    )
}