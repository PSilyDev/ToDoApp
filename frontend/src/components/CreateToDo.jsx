import { useForm } from "react-hook-form";
import axios from "axios";

export function CreateToDo(){
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

    const {register, handleSubmit} = useForm();

    const onSubmit = async(data) => {
        try{
            const response = await axios.post('http://localhost:4000/todo', data);
            console.log(response.data);
            alert(response.data.msg);
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

                {/* submit button */}
                <button type="submit">Add Todo</button><br />

            </form>
        </>
    )

}