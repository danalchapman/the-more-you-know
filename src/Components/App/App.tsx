import { QuestionsBox } from '../QuestionsBox/QuestionsBox'
import logo from '../../Assets/logo.png'
import './App.css';

export const App = () => {

  return (
    <main className="main-app">
      <div className='logo-box'>
        <img src={logo} alt='the more you know logo' className='logo'/>
      </div>
      <QuestionsBox />
    </main>
  );
}
