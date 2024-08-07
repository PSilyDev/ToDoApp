import { createContext, useCallback, useEffect, useMemo, useState } from 'react'
import './App.css'
import { useContext } from 'react';

// import { CreateToDo } from './components/CreateToDo'
import { DisplayToDos } from './components/DisplayToDos'
import { Signup } from './components/Signup';
import { Login } from './components/Login';
// import { Login2 } from './components/Login2';
import { Toggle } from './components/toggle/Toggle.jsx';
import axios from 'axios';
import ToDoCard from './components/ToDoCard.jsx';
import { NumberField } from './components/NumberField.jsx';
import { MainLayout } from './components/MainLayout.jsx';
import { Route, Routes } from 'react-router-dom';
import { LoginContext } from './context/LoginContext.js';
import { LandingPage } from './components/LandingPage.jsx';
import { jwtDecode } from 'jwt-decode';
import { enqueueSnackbar } from 'notistack';
import CreateToDo from './components/CreateToDo';
import { Modal } from './components/modal/Modal.jsx';

function App() {
  const [todos, setTodos] = useState([]);

  const [userData, setUserData] = useState([]);

  const [loggedIn, setLoggedIn] = useState(false);

  const [trigger, setTrigger] = useState(false);

  // console.warn('inside App. userData - ', userData);
  // console.warn('inside App. loggedIn - ', loggedIn);

  useEffect(() => { // refresh logic - reinstate userData

    // if userData is empty but userInfo obj present in session storage(stored during login) - it means the page is refreshed
    if(Object.keys(userData)?.length === 0 && sessionStorage.getItem('userInfo') !== null){
      // step 1 - authenticate the token
      const userInfo = JSON.parse(sessionStorage.getItem('userInfo'));

      if(!userInfo.token){
        console.log('tone not found!')
      }
      else{
        try{
          // decode the token
          const decodedToken = jwtDecode(userInfo.token);

          if(decodedToken.username === userInfo.username){
            // console.log('refresheddddddddddddddddd');
            setUserData(userInfo);
            // fetchToDos();
            setLoggedIn(true);
          }
        }
        catch(err){
          console.error(err);
        }
      }
    }
  }, [])

  const fetchToDos = async () => {
    try {
      const response = await axios.post("http://localhost:4000/todos", { userId: userData.userId });
      const sortedToDos = response.data.payload.sort((a, b) => new Date(a.date) - new Date(b.date));
      setTodos(sortedToDos || [])
    }
    catch (err) {
      console.log('Error while fetching, error - ', err);
    }
  }

  const updateCompleted = async (id) => {
    setTrigger(true);

    // try {

    //   const response = await axios.put('http://localhost:4000/completed', { id })

    //   if (response.status === 200) {
    //     fetchToDos();
    //     // alert(response.data.msg);
    //     enqueueSnackbar(response.data.msg);
    //   }
    // }
    // catch (err) {
    //   console.log('Error while updating, error - ', err);
    // }
  }

  const handleOnChange = async (id) => {
    // console.log(`in progress for ${id}`);
    try {

      const response = await axios.put('http://localhost:4000/inprogress', { id })

      if (response.status === 200) {
        fetchToDos();
        // alert(response.data.msg);
        enqueueSnackbar(response.data.msg);
      }
    }
    catch (err) {
      console.log('Error while updating, error - ', err);
    }
  }

  const handleDelete = async(id) => {
    // console.warn("id to delete - ", id);

    const response = await axios.post('http://localhost:4000/delete', { id });

    if(response.status === 200){
      fetchToDos();
    }
    // alert(response.data.msg);
    enqueueSnackbar(response.data.msg);
  }

  console.log('todos --------------', todos);

  // console.log('inside main, todos - ', todos);
  return (
    <div className="w-screen h-screen bg-gradient-to-r from-black via-gray-900 to-black">
      <LoginContext.Provider value={{fetchToDos, updateCompleted, handleOnChange, userData, setUserData, loggedIn, setLoggedIn, todos, setTodos, handleDelete, trigger, setTrigger}}>
        
        <Routes>

          <Route path='/' element={
            <MainLayout
          />}></Route>

          <Route path='/signup' element={
            <Signup />
          }></Route>

          <Route path='/login' element={
            <Login />
          }></Route>

          <Route path='/modal' element={
            <Modal />
          }></Route>


        </Routes>

      </LoginContext.Provider>
    </div>
  )
}

export default App
