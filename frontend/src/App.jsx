import { useEffect, useState } from 'react'
import './App.css'

import { Signup } from './components/Signup';
import { Login } from './components/Login';
import axios from 'axios';
import { MainLayout } from './components/MainLayout.jsx';
import { Route, Routes } from 'react-router-dom';
import { LoginContext } from './context/LoginContext.js';
import { jwtDecode } from 'jwt-decode';
import { enqueueSnackbar } from 'notistack';
import { Modal } from './components/modal/Modal.jsx';

function App() {
  const [todos, setTodos] = useState([]);

  const [userData, setUserData] = useState([]);

  const [loggedIn, setLoggedIn] = useState(false);

  const [trigger, setTrigger] = useState(false);

  const [deleteId, setDeleteId] = useState(null);


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
  }

  const handleOnChange = async (id) => {
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
    const response = await axios.post('http://localhost:4000/delete', { id });

    if(response.status === 200){
      fetchToDos();
    }
    enqueueSnackbar(response.data.msg);
  }

  console.log('todos --------------', todos);

  const getSelected = (selected) => {
    
    if(selected === 'yes'){
      handleDelete(deleteId);
    }
  }

  return (
    <div className="w-screen h-screen bg-gradient-to-r from-black via-gray-900 to-black">
      <LoginContext.Provider value={{fetchToDos, updateCompleted, handleOnChange, userData, setUserData, loggedIn, setLoggedIn, todos, setTodos, handleDelete, trigger, setTrigger, setDeleteId}}>
        
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

        </Routes>

      </LoginContext.Provider>
      <Modal trigger={trigger} setTrigger={setTrigger} getSelected={getSelected}></Modal>
    </div>
  )
}

export default App
