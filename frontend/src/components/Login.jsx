import { useForm } from "react-hook-form";
import axios from "axios";

export function Login(){
    const {register, handleSubmit} = useForm();

    const onSubmit = async(data) => {
        try{
            const response = await axios.post('http://localhost:4000/signin', data);
            console.log(response.data);
            alert(response.data.msg);

            // store the token in the session storage
            sessionStorage.setItem('token', response.data.token);
        }
        catch(err){
            console.log(err);
            throw err;
        }
    }
    return(
        <div className="bg-black w-screen h-screen flex justify-center items-center">

            <form onSubmit={handleSubmit(onSubmit)} className="bg-slate-800 w-2/6 h-3/5 rounded-md flex flex-col shadow-2xl shadow-gray-800">

                <div className="text-center text-2xl text-white font-sans font-medium tracking-normal mt-4">Login to your account</div>  

                <hr className="w-full border-t border-gray-500 mt-4" />

                <input type="text" placeholder="username/email" {...register("username")} 
                className="w-9/12 h-10 mx-auto px-3 rounded outline-0 mt-12 mb-3"
                /><br />

                <input type="password" placeholder="password" {...register("password")} 
                className="w-9/12 h-10 mx-auto px-3 rounded outline-0 mb-3"
                /><br />

                <button 
                    type="submit"
                    className="w-9/12 h-12 mx-auto px-3 rounded outline-0 mt-4 text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700"
                >Login</button>

<div className="text-blue-500 text-md mx-auto mt-3"><a href="/signin">Don't have an account?</a></div>

            </form>
        </div>
    )
}