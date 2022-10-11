import logo from './logo.svg';
import './App.css';

function record() {
  alert('Se grabará la pantalla')
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <button onClick={record}>Hablar</button>
        </div>
      </header>
    </div>
  );
}

export default App;
