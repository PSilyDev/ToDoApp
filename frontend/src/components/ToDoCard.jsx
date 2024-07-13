import { useContext } from "react";
import { Toggle } from "./toggle/Toggle";
import { LoginContext } from "../context/LoginContext";

export default function ToDoCard({todo, date, handleOnChange, updateCompleted}) {
    const { handleDelete } = useContext(LoginContext);
    // console.log('inside ToDoCard, todo passed - ', todo);
    return (
      <div className="bg-slate-800 rounded-md p-8 h-56">
        <div className="flex justify-between pb-8">
            <div className="text-white text-2xl font-semibold">{todo.title}</div>
            <div className="bg-black text-white border text-xl font-light rounded-full px-3 py-1">{date}</div>
        </div>
        <div className="text-white text-xl pb-8">
            {todo.description}
        </div>
        <div className="flex justify-between pb-2">
            {
                !todo.completed ?
                (<div className="w-1/3 flex">
                    <div>
                        <Toggle handleOnChange={handleOnChange} todo={todo} id={todo.id}/>
                    </div>
                    <div className="text-white text-lg pt-0.5 ml-2">In Progress</div>
                </div>) : (<div className="grid grid-cols-8"></div>)
            }
            <div className="flex items-center">
                <button onClick={() => handleDelete(todo._id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-9 h-9 mr-2"><path fill="#f50000" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM184 232H328c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24z"/></svg>
                </button>
                <button className="bg-lime-500 text-white text-xl rounded font-medium px-3 py-1 disabled:opacity-25" onClick={() => updateCompleted(todo._id)} disabled={todo.completed}>MARK COMPLETE</button>
            </div>
        </div>
      </div>
    )
  }