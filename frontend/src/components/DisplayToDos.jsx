import axios from "axios";
import { useEffect, useState } from "react";
import { Toggle } from "./toggle/Toggle";
import ToDoCard from "./ToDoCard";
import { NumberField } from "./NumberField";

export function DisplayToDos({todos, fetchToDos, updateCompleted, handleOnChange}){
    
    const [progressCount, setProgressCount] = useState(0);
    const [completedCount, setCompletedCount] = useState(0);
    const [totalCount, setTotalCount] = useState(0);

    console.log('progressCount - ', progressCount);

    useEffect(() => 
        {
            fetchToDos();
        },
        []
    )
    useEffect(() => {
        calculateProgressBar(todos);
    }, [todos])

    const calculateProgressBar = (todos) => {
        const inprogress = todos.filter(item => item.inprogress === true);
        const completed = todos.filter(item => item.completed === true);
        const total = todos.filter(item => item.completed === false);
        
        setProgressCount(inprogress.length);
        setCompletedCount(completed.length);
        setTotalCount(total.length);
    }

    const formatDateString = (dateString) => {
        const cleanedDateString = dateString.replace(/[^0-9-:TZ.]/g, '');

        const date = new Date(cleanedDateString);

        const options = { year: 'numeric', month: 'long', day: 'numeric'};

        return date.toLocaleDateString('en-US', options);
    }

    return(
        <div className="bg-black h-full grid grid-rows-12 rounded-md">
            {
                todos.length === 0 ?

                <div className="w-full h-full flex justify-center row-start-6">
                    <p className="text-3xl font-medium text-slate-700">no todos yet!</p>
                </div>

                :
                <>
                    <div className="row-start-2 row-span-3 w-full h-full">
                        <div className="flex justify-between w-7/12 mx-auto h-full py-0.5">
                            <div className="flex flex-col justify-center items-center w-32">
                                <NumberField count={progressCount} color="orange"/>
                                <p className="mt-3 text-white text-xl font-medium">In Progress</p>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                            <NumberField count={completedCount} color="green" />
                                <p className="mt-3 text-white text-xl font-medium">Completed</p>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                            <NumberField count={totalCount} color="red" />
                                <p className="mt-3 text-white text-xl font-medium">Todo's</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="row-start-5 row-span-10">
                        <div className="w-9/12 mx-auto h-full mt-10">
                            {
                                todos?.map((todo, index) => {
                                    return(
                                        <div key={index} className="mb-6">
                                            <ToDoCard 
                                                todo = {todo}
                                                date={formatDateString(todo.date)} 
                                                // title={todo.title} 
                                                // description={todo.description} 
                                                // id={todo._id}
                                                // completed={todo.completed}

                                                handleOnChange={handleOnChange} 
                                                updateCompleted={updateCompleted} 
                                                index={index} 
                                            />
                                        </div>

                                    )
                                })
                            }
                        </div>
                    </div>
                </>
            }
        </div>
    )
}