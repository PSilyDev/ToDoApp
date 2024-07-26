import { DisplayToDos } from "./DisplayToDos";
import CreateToDo from "./CreateToDo";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import { LandingPage } from "./LandingPage";
import { enqueueSnackbar } from "notistack";


export const MainLayout = () => {

    const navigate = useNavigate();

    const {loggedIn, setUserData, setLoggedIn, todos, fetchToDos, updateCompleted, handleOnChange, setTodos} = useContext(LoginContext);

    // console.log('Main Layput, logged In - ', loggedIn);

    const handleLogout = () => {
        // alert("logout successfull!");
        enqueueSnackbar("logout successfull!");
        // update context
        setUserData([])
        // remove the stored token
        sessionStorage.removeItem('userInfo');
        // set Logged In to false
        setLoggedIn(false);
        // empty the todos stored
        setTodos([]);
        // navigate to main layout
        navigate("/");
    }

    return(
        <div className="fixed w-screen h-screen grid grid-rows-12 bg-gradient-to-r from-black via-gray-900 to-black">
            <div className="row-span-1 flex justify-between">
                <div className="basis-1/3 flex justify-start">
                    <Link to="/" className="ml-4 my-auto">
                        <button type="button" disabled={true} className="w-24 h-10 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Checklist</button>
                    </Link>
                </div>
                <div className="basis-2/3 flex justify-end">
                {
                    loggedIn ? 

                    <div className="mr-6 my-auto">
                        <button type="button" className="w-24 h-10 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={handleLogout}>Logout</button>
                    </div>
                    :
                    (
                    <>
                        <Link to="/login" className="mr-6 my-auto">
                            <button type="button" className="w-24 h-10 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Login</button>
                        </Link>
                        <Link to="/signup" className="mr-6 my-auto">
                            <button type="button" className="w-24 h-10 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Signup</button>
                        </Link>
                    </>
                    )
                }
                </div>
            </div>
            {
                !loggedIn ? 

                <LandingPage /> :
            
                <div className="row-span-11 relative">

                    <div className="h-full lg:grid grid-cols-6 lg:overflow-y-hidden sm: overflow-y-auto">
                        <div className="lg:col-span-2 sm:flex-grow min-h-svh">
                            <CreateToDo />
                        </div>
                        <div className="bg-black col-span-4 overflow-y-auto custom-scrollbar rounded sm: bg-transparent">
                            <DisplayToDos />
                        </div>
                        
                    </div>
                </div>
            }
        </div>
    )
}