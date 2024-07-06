import { DisplayToDos } from "./DisplayToDos";
import { CreateToDo } from "./CreateToDo";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import { LandingPage } from "./LandingPage";

export const MainLayout = ({todos, fetchToDos, updateCompleted, handleOnChange, setTodos}) => {

    const {loggedIn} = useContext(LoginContext);

    console.log('Main Layput, logged In - ', loggedIn);

    return(
        <div className="w-screen h-screen grid grid-rows-12 bg-gradient-to-r from-black via-gray-900 to-black">
            <div className="row-span-1 flex justify-between">
                <div className="basis-1/3 flex justify-start">
                    <Link to="/" className="ml-4 my-auto">
                        <button type="button" class="w-24 h-10 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center">ToDos</button>
                    </Link>
                </div>
                <div className="basis-2/3 flex justify-end">
                    <Link to="/login" className="mr-6 my-auto">
                        <button type="button" class="w-24 h-10 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Login</button>
                    </Link>
                    <Link to="/signup" className="mr-6 my-auto">
                        <button type="button" class="w-24 h-10 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Signup</button>
                    </Link>
                </div>
            </div>
            {
                !loggedIn ? 

                <LandingPage /> :
            
                <div className="row-span-11 grid grid-cols-6">
                    <div className="col-span-4">
                        <DisplayToDos 
                            todos = {todos} 
                            fetchToDos = {fetchToDos}
                            updateCompleted = {updateCompleted}
                            handleOnChange = {handleOnChange}
                        />
                    </div>
                    <div className="col-span-2">
                        <CreateToDo 
                            setTodos = {setTodos} 
                            fetchToDos = {fetchToDos} 
                        />
                    </div>
                </div>
            }
        </div>
    )
}