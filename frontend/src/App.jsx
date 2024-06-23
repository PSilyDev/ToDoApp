import { createContext, useEffect, useState } from 'react'
import './App.css'
import { useContext } from 'react';

import { CreateToDo } from './components/CreateToDo'
import { DisplayToDos } from './components/DisplayToDos'
import { Signup } from './components/Signup';
import { Login } from './components/Login';
import { Login2 } from './components/Login2';
import { Toggle } from './components/toggle/Toggle.jsx';
import axios from 'axios';
import ToDoCard from './components/ToDoCard.jsx';


function App() {
  const [todos, setTodos] = useState([]);
  
  const fetchToDos = async() => {
    try{
      const response = await axios.get("http://localhost:4000/todos");
      setTodos(response.data.payload || [])
    }
    catch(err){
      console.log('Error while fetching, error - ', err);
    }
  }
  return (
    <>
    {/* <TodoContext.Provider value={{todos, setTodos}}> */}
      {/* <CreateToDo setTodos = {setTodos} fetchToDos = {fetchToDos} /> */}
      {/* <DisplayToDos todos = {todos} setTodos = {setTodos} fetchToDos = {fetchToDos} /> */}
      {/* <Signup /> */}
      {/* <Login /> */}
      {/* <Login2 /> */}
      {/* <Toggle /> */}
    {/* </TodoContext.Provider> */}
    <ToDoCard />
    </>
  )
}

export default App
