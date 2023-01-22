import { useState } from 'react';
import './App.css';
import Quiz from './components/Quiz';
import Home from './components/Home';

function App() {
  const [start, setStart] = useState(true);
  return (
    <div className="App">
      {start ? <Home start={start} setStart={setStart} /> : <Quiz />}
    </div>
  );
}

export default App;
