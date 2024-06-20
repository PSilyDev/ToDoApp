import axios from "axios";
import { useEffect, useState } from "react";

export function DisplayToDos({todos, fetchToDos}){
    
    useEffect(() => 
        {
            fetchToDos();
        },
        []
    )
    console.log(todos);
    async function updateCompleted(id){
        
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

    return(
        <>

            {
                todos?.map((todo, index) => {
                    return(
                        <div key={index}>
                            <p>{todo.date}</p>
                            <h1>{todo.title}</h1>
                            <h2>{todo.description}</h2>

                            <button onClick={() => updateCompleted(todo._id)} disabled={todo.completed}>{todo.completed ? 'Completed' : 'Mark as completed'}</button>
                        </div>
                    )
                })
            }
            
        </>
    )
}