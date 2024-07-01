import { DisplayToDos } from "./DisplayToDos";
import { CreateToDo } from "./CreateToDo";

export const MainLayout = ({todos, fetchToDos, updateCompleted, handleOnChange, setTodos}) => {

    return(
        <div className="w-screen h-screen grid grid-rows-12 bg-gradient-to-r from-black via-gray-900 to-black">
            <div className="row-span-1 flex justify-between">
                
            </div>
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
        </div>
    )
}