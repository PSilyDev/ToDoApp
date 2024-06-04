import { useForm } from "react-hook-form";

export function Login(){
    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log(data);
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