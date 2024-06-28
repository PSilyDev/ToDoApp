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
        <div className="h-screen w-screen bg-blue-950">

            <form onSubmit={handleSubmit(onSubmit)} className="bg-green-500 w-full" >

                {/* title */}
                <div className="w-full bg-red-500 h-12">
                    <input 
                        type="text" 
                        placeholder="title" 
                        {...register("title")}
                        className="w-9/12 h-full mx-auto block rounded px-3 outline-0"
                    /><br />
                </div>

                {/* description */}
                <div className="w-full bg-red-500">
                    <textarea
                        type="text" 
                        placeholder="description" 
                        {...register("description")}
                        className="w-9/12 h-32 mx-auto block rounded px-3 outline-0 resize-none"
                    /><br />
                </div>

                {/* date */}
                <div className="w-full bg-blue-500 h-12 ggrid grid-cols-12 gap-2 items-center">
                    <input
                        type="date" 
                        {...register("date")}
                        className="h-full mx-auto rounded px-3 outline-0 row-span-8"
                    /><br />

                    {/* priority */}
                    <select {...register("priority")} className="h-full mx-auto rounded px-3 outline-0 row-span-4">
                        <option value="high">High</option>
                        <option value="med">Med</option>
                        <option value="low">Low</option>
                    </select><br />
                </div>

                {/* submit button */}
                <button type="submit">Add Todo</button><br />

            </form>
        </div>
    )

}