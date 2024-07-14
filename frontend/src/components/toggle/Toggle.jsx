import { useContext } from "react";
import "./Toggle.css";
import { LoginContext } from "../../context/LoginContext";

export function Toggle({todo, disabled}){
    // console.log('inside toggle, todo - ', todo);
    const {handleOnChange} = useContext(LoginContext);

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