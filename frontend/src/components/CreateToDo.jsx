import { useForm } from "react-hook-form";
import axios from "axios";
// import { useContext } from "react";
// import { TodoContext } from "../App";

export function CreateToDo({setTodos, fetchToDos}){
    // const [title, setTitle] = useState("");
    // const [desc, setDesc] = useState("");
    // return(
    //     <>
    //         <input style={{
    //             padding: 10,
    //             margin: 10
    //         }} type="text" placeholder="title" onChange={function(event){
    //             let value = event.target.value;
    //             setTitle(value);
    //         }}></input><br />
    //         <input style={{
    //             padding: 10,
    //             margin: 10
    //         }} type="text" placeholder="description" onChange={function(event){
    //             let value = event.target.value;
    //             setDesc(value);
    //         }}></input><br />

    //         <button style={{
    //             padding: 10,
    //             margin: 10
    //         }} onClick={() => {
    //             fetch('http://localhost:4000/todo',{
    //                 method: "POST",
    //                 body: JSON.stringify({
    //                     title: title,
    //                     description: desc
    //                 }),
    //                 headers: {
    //                     "Content-type": "application/json"
    //                 }
    //             })
    //                 .then(async function(res){
    //                     const json = await res.json();
    //                     alert("ToDo Added.")
    //                 })
    //         }}>Add Todo</button><br />
    //     </>
    // )

    const { register, handleSubmit } = useForm();
    // const { todos, setTodos } = useContext(TodoContext);

    const onSubmit = async(data) => {        
        try{
            const response = await axios.post('http://localhost:4000/todo', data);
            console.log(response.data);
            if(response.status === 201){
                // setTodos([...todos ,data]);
                // setUpdated(s => !s);
                fetchToDos();
                alert(response.data.msg);
            }
        }
        catch(err){
            console.log(err);
            throw err;
        }
    }

    return(
        <>
            <form onSubmit={handleSubmit(onSubmit)}>

                {/* title */}
                <input type="text" placeholder="title" {...register("title")}></input><br />

                {/* description */}
                <input type="text" placeholder="description" {...register("description")}></input><br />

                {/* date */}
                <input type="date" {...register("date")}></input><br />

                {/* priority */}
                <select {...register("priority")}>
                    <option value="high">High</option>
                    <option value="med">Med</option>
                    <option value="low">Low</option>
                </select><br />

                {/* submit button */}
                <button type="submit">Add Todo</button><br />

            </form>
        </>
    )

}