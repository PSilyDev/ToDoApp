import { useState } from "react"

export function CreateToDo(){
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    return(
        <>
            <input style={{
                padding: 10,
                margin: 10
            }} type="text" placeholder="title" onChange={function(event){
                let value = event.target.value;
                setTitle(value);
            }}></input><br />
            <input style={{
                padding: 10,
                margin: 10
            }} type="text" placeholder="description" onChange={function(event){
                let value = event.target.value;
                setDesc(value);
            }}></input><br />

            <button style={{
                padding: 10,
                margin: 10
            }} onClick={() => {
                fetch('http://localhost:4000/todo',{
                    method: "POST",
                    body: JSON.stringify({
                        title: title,
                        description: desc
                    }),
                    headers: {
                        "Content-type": "application/json"
                    }
                })
                    .then(async function(res){
                        const json = await res.json();
                        alert("ToDo Added.")
                    })
            }}>Add Todo</button><br />
        </>
    )
}