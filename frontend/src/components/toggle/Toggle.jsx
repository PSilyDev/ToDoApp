import "./Toggle.css";

export function Toggle({handleOnChange, id, disabled}){

    return(
        <label className="switch">
            <input 
                type="checkbox"
                disabled={disabled} 
                onChange={() => handleOnChange(id)}/>
            <span className="slider" />
        </label>
    )
}