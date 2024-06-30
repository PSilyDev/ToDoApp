import "./Toggle.css";

export function Toggle({todo, handleOnChange, disabled}){
    console.log('inside toggle, todo - ', todo);
    return(
        <label className="switch">
            <input 
                type="checkbox"
                disabled={disabled}
                defaultChecked={todo.inprogress}
                onChange={() => handleOnChange(todo._id)}/>
            <span className="slider" />
        </label>
    )
}