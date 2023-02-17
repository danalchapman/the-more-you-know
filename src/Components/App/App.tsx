import { useState } from 'react';
import { QuestionsBox } from '../QuestionsBox/QuestionsBox'
import './App.css';

export const App = () => {

  const [questions, setQuestions] = useState([])

  return (
    <main className="App">
      <h1>The More You Know</h1>
      <QuestionsBox />
    </main>
  );
}
