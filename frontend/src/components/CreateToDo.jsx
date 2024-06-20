import { useForm } from "react-hook-form";
import axios from "axios";


export function CreateToDo({fetchToDos}){

    const { register, handleSubmit } = useForm();

    const onSubmit = async(data) => {        
        try{
            const response = await axios.post('http://localhost:4000/todo', data);
            console.log(response.data);
            if(response.status === 201){
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