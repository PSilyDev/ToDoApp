import axios from "axios";
import { useEffect, useState } from "react";
import { Toggle } from "./toggle/Toggle";
import ToDoCard from "./ToDoCard";

export function DisplayToDos({todos, fetchToDos}){
    
    useEffect(() => 
        {
            fetchToDos();
        },
        []
    )
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

    function handleOnChange(id){
        console.log(`in progress for ${id}`);
    }

    const formatDateString = (dateString) => {
        console.log(dateString);
        const cleanedDateString = dateString.replace(/[^0-9-:TZ.]/g, '');

        const date = new Date(cleanedDateString);

        const options = { year: 'numeric', month: 'long', day: 'numeric'};

        console.log(date.toLocaleDateString('en-US', options));
        return date.toLocaleDateString('en-US', options);
    }

    return(
        <>

            {
                // todos?.map((todo, index) => {
                //     return(
                //         <div key={index}>
                //             <p>{todo.date}</p>
                //             <h1>{todo.title}</h1>
                //             <h2>{todo.description}</h2>
                //             <Toggle handleOnChange={handleOnChange} index = {index}/>

                //             <button onClick={() => updateCompleted(todo._id)} disabled={todo.completed}>{todo.completed ? 'Completed' : 'Mark as completed'}</button>
                //         </div>
                //     )
                // })
                todos?.map((todo, index) => {
                    return(
                        <div key={index}>
                            <ToDoCard title={todo.title} date={formatDateString(todo.date)} description={todo.description} />
                        </div>

                    )
                })
            }
            
            {/* <ToDoCard title={todos[0].title} date={todos[0].date} description={todos[0].description} /> */}
        </>
    )
}