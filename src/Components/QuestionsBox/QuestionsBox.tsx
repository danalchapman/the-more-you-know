import { useState } from 'react'
import { QuestionCard } from '../QuestionCard/QuestionCard'
import { bData } from '../../Data/Behavioral'
import { tData } from '../../Data/Technical'
import { Question } from '../../model'
import './QuestionsBox.css'

export const QuestionsBox = () => {
    // need to map through questions, similar to trivia trials
    // write functions for onClick for each button

    // const [question, setQuestion] = useState<Question>({ id: '', question: '', answer: ''})
    const [bQuestions, setBQuestions] = useState<Question[]>([])
    const [tQuestions, setTQuestions] = useState<Question[]>([])

    const chooseBehavioral = () => {
        setBQuestions(bData)
    }

    const chooseTechnical = () => {
        setTQuestions(tData)
    }

    const displayQuestions = () => {
        let displayedQuestions;

        if (bQuestions) {
            displayedQuestions = bQuestions
        } else if (tQuestions) {
            displayedQuestions = tQuestions
        }

        return displayedQuestions?.map(question => {
            return (
                <QuestionCard 
                    key={ question.id }
                    id={ question.id }
                    question={ question.question }
                    answer={ question.answer }
                />
            )
        })
    }

    return (
        <section>
            <h2>Choose Your Topic</h2>
            <div>
                <button
                    onClick={() => chooseBehavioral()}
                >Behavioral Questions</button>
                <button
                    onClick={() => chooseTechnical()}
                >Technical Questions</button>
            </div>
            { displayQuestions() }
        </section>
    )
}