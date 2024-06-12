import "./Toggle.css";

export function Toggle(){

    return(
        <label className="switch">
            <input type="checkbox" />
            <span className="slider" />
        </label>
    )
}