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
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="username" {...register("username")}></input><br />
                
                <input type="text" placeholder="email" {...register("email")}></input><br />
                
                <input type="password" placeholder="password" {...register("password")}></input><br />

                <button type="submit">Signup</button>
            </form>
        </>
    );
}