import axios from "axios";
import { useEffect, useState } from "react";

export function DisplayToDos({todos, fetchToDos}){
    console.log('inside Display, updated - ', updated);

    const [todos, setTodos] = useState([]);
    const [completed, setCompleted] = useState(0);

    useEffect(() => 
        {
            // try{
            //     axios.get('http://localhost:4000/todos')
            //         .then(response => {
            //             setTodos(response.data.payload || [])
            //             console.log('rendered');
            //         });
            // }
            // catch(err){
            //     console.log('error fetching todos, error - ', err);
            // }
            fetchToDos();

        },
        []
    )
    console.log(todos);
    async function updateCompleted(id){
        // setCompleted(c => c + 1); 
        // setUpdated(s => !s);
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
        // fetch('http://localhost:4000/completed',{
        //     method: "PUT",
        //     body: JSON.stringify({
        //         id: id
        //     }),
        //     headers: {
        //         "Content-type": "application/json"
        //     }
        // })
        //     .then(async function(res){
        //         const json = await res.json();
        //         alert(json.msg);
        //     })
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