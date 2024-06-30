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
import { NumberField } from './components/NumberField.jsx';
import { MainLayout } from './components/MainLayout.jsx';


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

  const updateCompleted = async(id) => {
    try{
    
        const response = await axios.put('http://localhost:4000/completed', {id})
    
        if(response.status === 200){
            fetchToDos();
            alert(response.data.msg);
        }
    }
    catch(err){
        console.log('Error while updating, error - ', err);
    }  
  }

  const handleOnChange = async(id) => {
    console.log(`in progress for ${id}`);
    try{
    
      const response = await axios.put('http://localhost:4000/inprogress', {id})
  
      if(response.status === 200){
          fetchToDos();
          alert(response.data.msg);
      }
  }
  catch(err){
      console.log('Error while updating, error - ', err);
  }
  }
  console.log('inside main, todos - ', todos);
  return (
    <>
    {/* <TodoContext.Provider value={{todos, setTodos}}> */}
      {/* <CreateToDo setTodos = {setTodos} fetchToDos = {fetchToDos} /> */}
      {/* <DisplayToDos 
        todos = {todos} 
        fetchToDos = {fetchToDos}
        updateCompleted = {updateCompleted}
        handleOnChange = {handleOnChange}
      /> */}
      {/* <Signup /> */}
      {/* <Login /> */}
      {/* <Login2 /> */}
      {/* <Toggle /> */}
    {/* </TodoContext.Provider> */}
    {/* <ToDoCard /> */}
    {/* <NumberField /> */}
        <MainLayout todos = {todos} 
        fetchToDos = {fetchToDos}
        updateCompleted = {updateCompleted}
        handleOnChange = {handleOnChange}
        setTodos = {setTodos} />
    </>
  )
}

export default App
