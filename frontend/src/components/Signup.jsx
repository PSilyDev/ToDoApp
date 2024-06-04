import { useForm } from "react-hook-form";

export function Signup(){
    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log(data);
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