import { useForm } from "react-hook-form";
import axios from "axios";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import { useNavigate } from "react-router-dom";
import { enqueueSnackbar } from "notistack";
export function Login(){

    const navigate = useNavigate();

    const { setUserData, setLoggedIn, setTodos} = useContext(LoginContext);

    const {register, handleSubmit} = useForm();

    const onSubmit = async(data) => {
        try{
            const response = await axios.post('http://localhost:4000/signin', data);
            if(response.status === 200){
                // alert(response.data.msg);
                enqueueSnackbar(response.data.msg);
                
                // update context
                setUserData({...response.data.userInfo})
                // store the token, userInfo in the session storage
                // sessionStorage.setItem('token', response.data.userInfo.token);
                sessionStorage.setItem('userInfo', JSON.stringify(response.data.userInfo));
                // set Logged In to true
                setLoggedIn(true);
                // empty the previous stored todos
                setTodos([]);
                // navigate to main layout
                navigate("/");
            }
            
        }
        catch(err){
            if(err.response && err.response.status === 401){
                enqueueSnackbar(err.response.data.msg);
            }
            else{
                console.log(err);
                // throw err;
            }
        }
    }
    return(
        <div className="fixed grid grid-cols-12">

            <div className="col-span-1 mt-2">
            
                <Link to="/" className="m-4">
                    <button type="button" className="mt-2 w-24 h-10 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Checklist</button>
                </Link>
            
                <div className="col-span-11 w-screen h-screen flex justify-center items-center">

                    <form onSubmit={handleSubmit(onSubmit)} className="lg:bg-slate-800 w-2/6 h-3/5 rounded-md flex flex-col shadow-2xl shadow-gray-800 w-full max-w-lg md:w-3/5 lg:w-3/5 h-full max-h-lg md:h-3/5 lg:w-3/5 sm: bg-transparent w-4/5 shadow-none">

                        <div className="lg:visible text-center text-2xl text-white font-sans font-medium tracking-normal mt-6 sm: invisible">Login to your account</div>  

                        <hr className="lg:visible w-full border-t border-gray-500 mt-6 sm: invisible" />

                        <input type="text" placeholder="username/email" {...register("username")} 
                        className="w-9/12 h-12 mx-auto px-3 rounded outline-0 mt-14 mb-3"
                        /><br />

                        <input type="password" placeholder="password" {...register("password")} 
                        className="w-9/12 h-12 mx-auto px-3 rounded outline-0 mb-3"
                        /><br />

                        <button 
                            type="submit"
                            className="w-9/12 h-14 mx-auto px-3 rounded outline-0 mt-4 text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700"
                        >Login</button>

                        <div className="text-blue-500 text-md mx-auto mt-4"><a href="/signup">Don't have an account?</a></div>

                    </form>
                </div>
            </div>
        </div>
    )
}