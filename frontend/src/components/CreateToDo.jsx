import { useForm } from "react-hook-form";
import axios from "axios";
import Avatar from "react-avatar";
import { useContext, useMemo } from "react";
import { LoginContext } from "../context/LoginContext";
import { enqueueSnackbar } from "notistack";


export function CreateToDo() {

    const { userData, fetchToDos } = useContext(LoginContext);

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        try {
            data = { ...data, userId: userData.userId };
            // console.log('CreateToDo, data passed - ', data);
            const response = await axios.post('http://localhost:4000/todo', data);
            // console.log(response.data);
            if (response.status === 201) {
                fetchToDos();
                // alert(response.data.msg);
                enqueueSnackbar(response.data.msg);
            }
            reset();
        }
        catch (err) {
            console.log(err);
            throw err;
        }
    }

    const avatarName = useMemo(() => {
        console.log("Avatar name computed");
        return `${userData.username[0]} ${userData.username[1]}`;
    }, [userData.username]);

    console.log("CreateToDo component rendered");

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center w-full">

            <div className="size-full flex justify-center items-center mt-16">
                <Avatar name={avatarName} round={true} size="130" className="" />
            </div>

            <div className="w-9/12 mt-8">
                <p className="text-center text-2xl text-white font-sans font-medium tracking-normal">
                    Welcome, {userData.username}
                </p>
                <p className="mt-4 text-center text-xl text-white font-sans font-normal tracking-wider">
                    This is your personal tasks manager
                </p>
            </div>

            <div className="w-9/12 h-14 mt-6">
                {/* title */}
                <input
                    type="text"
                    placeholder="Task Title"
                    {...register("title")}
                    className="w-full h-full rounded px-3 outline-0 mt-4"
                /><br />


                {/* description */}
                <textarea
                    type="text"
                    placeholder="Description"
                    {...register("description")}
                    className="w-full h-full rounded px-3 py-3 outline-0 resize-none mt-4"
                /><br />


                <div className="w-full h-full flex justify-between mt-3">

                    {/* date */}
                    <div className="h-full basis-3/5">
                        <input
                            type="date"
                            {...register("date")}
                            className="w-full h-full rounded px-3 outline-0 valid:text-black invalid:text-slate-400"
                            required
                        /><br />
                    </div>

                    {/* priority */}
                    <div className="h-full basis-1/3">
                        <select {...register("priority")} className="w-full h-full rounded px-3 outline-0 invalid:text-slate-400 valid:text-black" defaultValue="" required>
                            <option value="" disabled selected>Priority</option>
                            <option value="high">High</option>
                            <option value="med">Med</option>
                            <option value="low">Low</option>
                        </select><br />
                    </div>
                </div>

                <button type="submit" className="mt-8 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 w-full h-full rounded px-3 outline-0"
                >
                    Add Todo
                </button><br />

            </div>
        </form>
    )
}