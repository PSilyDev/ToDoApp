import { useForm } from "react-hook-form";
import axios from "axios";

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
        <div className="bg-black w-screen h-screen flex justify-center items-center">


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
    );
}