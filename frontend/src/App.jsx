import { createContext, useEffect, useState } from 'react'
import './App.css'
import { useContext } from 'react';

import { CreateToDo } from './components/CreateToDo'
import { DisplayToDos } from './components/DisplayToDos'
import { Signup } from './components/Signup';
import { Login } from './components/Login';
import { Login2 } from './components/Login2';
import { Toggle } from './components/toggle/Toggle.jsx';

// export const TodoContext = createContext({});

function App() {
  // const [todos, setTodos] = useState([]);
  const [updated, setUpdated] = useState(false);
  
  // fetch('http://localhost:4000/todos')
  //   .then(async function(res){
  //     const json = await res.json();
  //     setTodos(json.payload);
  //   })

  console.log('inside main, updated - ', updated);
  return (
    <>
    {/* <TodoContext.Provider value={{todos, setTodos}}> */}
      <CreateToDo setUpdated = {setUpdated} />
      <DisplayToDos updated = {updated} />
      {/* <Signup /> */}
      {/* <Login /> */}
      {/* <Login2 /> */}
      <Toggle />
    {/* </TodoContext.Provider> */}
    </>
  )
}

export default App
