import "./Toggle.css";

export function Toggle({handleOnChange, index}){

    return(
        <label className="switch">
            <input type="checkbox" onChange={() => handleOnChange(index)}/>
            <span className="slider" />
        </label>
    )
}