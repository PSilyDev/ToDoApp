import { DisplayToDos } from "./DisplayToDos";
import { CreateToDo } from "./CreateToDo";

export const MainLayout = ({todos, fetchToDos, updateCompleted, handleOnChange, setTodos}) => {

    return(
        <div className="w-screen h-screen grid grid-rows-12">
            <div className="bg-red-400 row-span-1">
                Header
            </div>
            <div className="bg-green-400 row-span-11 grid grid-cols-6">
                <div className="bg-cyan-400 col-span-4">
                    <DisplayToDos 
                        todos = {todos} 
                        fetchToDos = {fetchToDos}
                        updateCompleted = {updateCompleted}
                        handleOnChange = {handleOnChange}
                    />
                </div>
                <div className="bg-gray-400 col-span-2">
                    <CreateToDo 
                        setTodos = {setTodos} 
                        fetchToDos = {fetchToDos} 
                    />
                </div>
            </div>
        </div>
    )
}