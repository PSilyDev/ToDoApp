import { Toggle } from "./toggle/Toggle";

export default function ToDoCard({todo, date, handleOnChange, updateCompleted}) {
    console.log('inside ToDoCard, todo passed - ', todo);
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
                (<div className="w-2/3 flex">
                    <div>
                        <Toggle handleOnChange={handleOnChange} todo={todo} id={todo.id}/>
                    </div>
                    <div className="text-white text-lg pt-0.5 ml-2">In Progress</div>
                </div>) : (<div className="grid grid-cols-8"></div>)
            }
            <div><button className="bg-lime-500 text-white text-xl rounded font-medium px-3 py-1 disabled:opacity-25" onClick={() => updateCompleted(todo._id)} disabled={todo.completed}>MARK COMPLETE</button></div>
        </div>
      </div>
    )
  }