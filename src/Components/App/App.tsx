import { QuestionsBox } from '../QuestionsBox/QuestionsBox'
import './App.css';

export const App = () => {

  return (
    <main className="main-app">
      <h1 className='app-title'>The More You Know</h1>
      <QuestionsBox />
    </main>
  );
}
