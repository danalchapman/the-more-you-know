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
    const [questions, setQuestions] = useState<Question[]>([])

    const chooseBehavioral = () => {
        setQuestions(bData)
    }

    const chooseTechnical = () => {
        setQuestions(tData)
    }

    const clearQuestions = () => {
        setQuestions([])
    }

    const displayQuestions = () => {

        return questions?.map(question => {
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
        <section className='questions-display'>
            <div className='nav-btns-box'>
                <div>
                    <button
                        className='nav-btns'
                        onClick={() => chooseBehavioral()}
                    >Behavioral Questions</button>
                    <button
                        className='nav-btns'
                        onClick={() => chooseTechnical()}
                    >Technical Questions</button>
                </div>
                <div>
                    <button
                        className='nav-btns'
                        onClick={() => clearQuestions()}
                    >Clear Questions</button>
                </div>
            </div>
            { questions.length ?
            <article className='question-box'>
                { displayQuestions() }
            </article>  :
            <article className='loading-box'>
                <p>Here you can review common behavioral and (front-end) techincal questions.</p>
                <p>Choose from the options above to start your review.</p>    
            </article>} 
            
        </section>
    )
}