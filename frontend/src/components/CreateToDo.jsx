import { useForm } from "react-hook-form";
import axios from "axios";
import Avatar from "react-avatar";


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
        <form onSubmit={handleSubmit(onSubmit)} className="bg-slate-800 w-screen h-screen grid grid-rows-12 gap-4">
            
            <div className="row-start-3 row-span-2 justify-self-center">
                <Avatar name="Prakhar Srivastava" round={true} className="place-content-end"/>
            </div>

            <div className="row-start-5 row-span-2 justify-self-center">
                <p className="text-center text-2xl text-white font-sans font-medium tracking-normal">
                    Welcome, Prakhar
                </p>
                <p className="mt-3 text-center text-xl text-white font-sans font-normal tracking-wider">
                    This is your personal tasks manager
                </p>
            </div>
            
            <div className="w-9/12 row-start-7 justify-self-center">
                {/* title */}
                <input 
                    type="text" 
                    placeholder="Task Title" 
                    {...register("title")}
                    className="w-full h-full rounded px-3 outline-0"
                /><br />
            </div>
            
            <div className="w-9/12 row-start-8 row-span-2 justify-self-center">
                {/* description */}
                <textarea
                    type="text" 
                    placeholder="Description" 
                    {...register("description")}
                    className="w-full h-full rounded px-3 py-3 outline-0 resize-none"
                /><br />
            </div>
            
            <div className="w-9/12 row-start-10 justify-self-center">
                <div className="w-full h-full grid grid-cols-12 gap-8">

                    {/* date */}
                    <div className="bg-cyan-500 h-full col-span-8">
                        <input
                            type="date" 
                            {...register("date")}
                            className="w-full h-full rounded px-3 outline-0 valid:text-black invalid:text-slate-400"
                            required
                        /><br />
                    </div>

                    {/* priority */}
                    <div className="bg-gray-500 h-full col-span-4">
                        <select {...register("priority")} className="w-full h-full rounded px-3 outline-0 invalid:text-slate-400 valid:text-black" defaultValue="" required>
                            <option value="" disabled selected>Priority</option>
                            <option value="high">High</option>
                            <option value="med">Med</option>
                            <option value="low">Low</option>
                        </select><br />
                    </div>
                </div>
            </div>
            
            <div className="w-9/12 row-start-11 justify-self-center">
                <button type="submit" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 w-full h-full rounded px-3 outline-0"
                >
                    Add Todo
                </button><br />
            </div>


        </form>
    )
}