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
        <>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input type="text" placeholder="username/email" {...register("username")}></input><br />

                <input type="password" placeholder="password" {...register("password")}></input><br />

                <button type="submit">Login</button>

            </form>
        </>
    )
}