import { useState } from 'react'
import './App.css'
import { CreateToDo } from './components/CreateToDo'
import { DisplayToDos } from './components/DisplayToDos'
import { Signup } from './components/Signup';
import { Login } from './components/Login';
import { Login2 } from './components/Login2';
import { Toggle } from './components/toggle/Toggle';

function App() {
  const [todos, setTodos] = useState([]);

  // fetch('http://localhost:4000/todos')
  //   .then(async function(res){
  //     const json = await res.json();
  //     setTodos(json.payload);
  //   })
  return (
    <>
      {/* <CreateToDo />
      <DisplayToDos todos={todos}/> */}
      {/* <Signup /> */}
      {/* <Login /> */}
      {/* <Login2 /> */}
      <Toggle />
    </>
  )
}

export default App
