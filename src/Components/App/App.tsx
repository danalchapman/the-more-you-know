import { useEffect, useState } from 'react'
import { QuestionsBox } from '../QuestionsBox/QuestionsBox'
import { bData } from '../../Data/Behavioral'
import { tData } from '../../Data/Technical'
import { Question } from '../../model'
import './App.css';

export const App = () => {

  // const [question, setQuestion] = useState<Question>({ id: '', question: '', answer: ''})
  const [bQuestions, setBQuestions] = useState<Question[]>([])
  const [tQuestions, setTQuestions] = useState<Question[]>([])

  useEffect(() => {
    setBQuestions(bData)
    setTQuestions(tData)
  }, [])

  return (
    <main className="App">
      <h1>The More You Know</h1>
      <QuestionsBox />
    </main>
  );
}
