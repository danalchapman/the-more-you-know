import { useState } from "react"
import './QuestionCard.css'

export const QuestionCard = () => {
    // need to pass props from QuestionsBox
    // ternary for the button 
    // clicked ? question.answer : 'Click Me For The Answer'

    const [clicked, setClicked] = useState<boolean>(false)

    return (
        <article>
            <h3>I am a Question Title</h3>
            <p>I am a Question</p>
            <button>Click Me For the Answer</button>
        </article>
    )
}