import { Toggle } from "./toggle/Toggle";

export default function ToDoCard({title, date, description, handleOnChange, updateCompleted, index, id, completed}) {
    return (
      <div className="bg-slate-800 border rounded-md p-5">
        <div className="flex justify-between pb-6">
            <div className="text-white text-lg font-semibold">{title}</div>
            <div className="bg-black text-white border font-light rounded-full px-3 py-1">{date}</div>
        </div>
        <div className="text-white pb-8">
            {description}
        </div>
        <div className="flex justify-between pb-2">
            <div className="grid grid-cols-8">
                <div>
                    <Toggle handleOnChange={handleOnChange} index={index} /> 
                </div>
                <div className="text-white pt-1">In Progress</div>
            </div>
            <div><button className="bg-lime-500 text-white rounded font-medium px-3 py-1 disabled:opacity-25" onClick={() => updateCompleted(id)} disabled={completed}>MARK COMPLETE</button></div>
        </div>
      </div>
    )
  }