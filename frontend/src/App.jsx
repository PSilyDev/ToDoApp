import { useState } from 'react'
import './App.css'
import { CreateToDo } from './components/CreateToDo'
import { Todos } from './components/Todos'
import { Signup } from './components/Signup';
import { Login } from './components/Login';
import { Login2 } from './components/Login2';

function App() {
  const [todos, setTodos] = useState([]);

  // fetch('http://localhost:4000/todos')
  //   .then(async function(res){
  //     const json = await res.json();
  //     setTodos(json.payload);
  //   })
  return (
    <>
      {/* <CreateToDo /> */}
      {/* <Todos todos={todos}/> */}
      {/* <Signup /> */}
      {/* <Login /> */}
      <Login2 />
    </>
  )
}

export default App
