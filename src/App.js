import './App.css';
import Home from './pages/Home';
import Projects from './pages/Projects';
import CodeSymbolBackground from "./components/CodeSymbolBackground";
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <BackgroundWrapper />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/projects' element={<Projects/>}/>
        </Routes>
      </Router>
    </div>
  );
}

function BackgroundWrapper() {
  const location = useLocation();
  
  return (
    <>
      {location.pathname === '/' && <CodeSymbolBackground />}
    </>
  );
}

export default App;
