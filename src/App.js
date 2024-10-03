import './App.css';
import Home from './pages/Home';
import Projects from './pages/Projects';
import CodeSymbolBackground from "./components/CodeSymbolBackground";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <CodeSymbolBackground />
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/projects' element={<Projects/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
