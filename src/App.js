import {useState} from 'react'
import './App.css';

function App() {
  const [button, setButton] = useState(true)

  return (
    <div data-testid="todo-1" className="App">
      <button onClick={() => setButton(!button)}> Click me</button>
      {button ===  true ? <h1>Shubham</h1>: null}
    </div>
  );
}

export default App;
