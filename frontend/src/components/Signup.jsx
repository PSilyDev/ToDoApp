import { useForm } from "react-hook-form";
import axios from "axios";
import { Link } from "react-router-dom";

export function Signup(){
    const {register, handleSubmit} = useForm();

    const onSubmit = async(data) => {
        try{
            const response = await axios.post('http://localhost:4000/signup', data);
            console.log(response.data);
            alert(response.data);
        }
        catch(err){
            console.log(err);
            throw err;
        }
    }

    return(
        <div className="grid grid-cols-12 bg-black">
        <div className="col-span-1 mt-2">
            <Link to="/" className="m-4">
                <button type="button" class="w-24 h-10 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center">ToDos</button>
            </Link>
        <div className="col-span-11 bg-black w-screen h-screen flex justify-center items-center">


            <form onSubmit={handleSubmit(onSubmit)} className="bg-slate-800 w-2/6 h-3/4 rounded-md flex flex-col shadow-2xl shadow-gray-800">

                <div className="text-center text-2xl text-white font-sans font-medium tracking-normal mt-4">Create a new account</div>
                <div className="mt-1 text-center text-md text-slate-300 font-sans font-normal">
                    It's quick and easy.
                </div>
                <hr className="w-full border-t border-gray-500 mt-4" />

                <input 
                    type="text" 
                    placeholder="username" 
                    {...register("username")}
                    className="w-9/12 h-10 mx-auto px-3 rounded outline-0 mt-14 mb-3"
                /><br />
                
                <input 
                    type="text" 
                    placeholder="email" 
                    {...register("email")}
                    className="w-9/12 h-10 mx-auto px-3 rounded outline-0 mb-3"
                /><br />
                
                <input 
                    type="password" 
                    placeholder="password" 
                    {...register("password")}
                    className="w-9/12 h-10 mx-auto px-3 rounded outline-0 mb-3"
                /><br />

                <button
                    type="submit"
                    className="w-9/12 h-12 mx-auto px-3 rounded outline-0 mt-4 text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700">
                        Signup
                </button>
                <div className="text-blue-500 text-md mx-auto mt-3"><a href="/signin">Already have an account?</a></div>
            </form>
        </div>
    </div>
    </div>
    );
}