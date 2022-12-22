import './App.css';
import Home from './pages/Home';
import { Reset } from 'styled-reset'

function App() {
  return (
    <>
      <Reset />
      <div className="App">
        <Home />
      </div>
    </>
  );
}

export default App;