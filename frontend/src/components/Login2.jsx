import { useState } from "react"

let count = 0

export function Login2() {

    const [user, setUser] = useState({});


    function handleChange(event){
        let name = event.target.name;
        let value = event.target.value;

        setUser({...user, [name]: value});
    }

    return(
        <>
            <form>
                <input name="username" type="text" onChange={handleChange}></input><br /><br />
                <input name="password" type="text" onChange={handleChange}></input>
                {console.log(`rendered ${count++}`)}
            </form>
        </>
    )
}