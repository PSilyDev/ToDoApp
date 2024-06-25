import axios from "axios";
import { useEffect, useState } from "react";
import { Toggle } from "./toggle/Toggle";
import ToDoCard from "./ToDoCard";

export function DisplayToDos({todos, fetchToDos, updateCompleted, handleOnChange}){
    
    useEffect(() => 
        {
            fetchToDos();
        },
        []
    )

    const formatDateString = (dateString) => {
        const cleanedDateString = dateString.replace(/[^0-9-:TZ.]/g, '');

        const date = new Date(cleanedDateString);

        const options = { year: 'numeric', month: 'long', day: 'numeric'};

        return date.toLocaleDateString('en-US', options);
    }

    return(
        <>

            {
                
                todos?.map((todo, index) => {
                    return(
                        <div key={index}>
                            <ToDoCard 
                                title={todo.title} 
                                date={formatDateString(todo.date)} 
                                description={todo.description} 
                                id={todo._id}
                                completed={todo.completed}
                                
                                handleOnChange={handleOnChange} 
                                updateCompleted={updateCompleted} 
                                index={index} 
                            />
                        </div>

                    )
                })
            }
            
        </>
    )
}