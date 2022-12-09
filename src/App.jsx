import './App.css';
import { useState } from 'react';
import Addtodo from './components/AddTodo/Addtodo';

function App() {

  const [valueInputs, setValueInputs] = useState(
    {
        name : "",
        discription : "",
    })
    const [array,setArray] = useState([])
  return (
    <div className="App">
     <Addtodo valueInputs={valueInputs} setValueInputs={setValueInputs} array={array} setArray={setArray}/>
    </div>
  );
}

export default App;
