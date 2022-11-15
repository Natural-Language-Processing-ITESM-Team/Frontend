import './App.css';
import {RecordMenu} from './components/RecordMenu';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Home} from './components/home'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/chat' element={<RecordMenu />} />
      </Routes>
    </Router>
    // <div className="App">
    //   <header className="App-header">
    //     <RecordMenu></RecordMenu>
    //   </header>
    // </div>
  );
}

export default App;
