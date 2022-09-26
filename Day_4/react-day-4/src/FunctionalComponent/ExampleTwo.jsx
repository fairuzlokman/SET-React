import { useState } from "react";

export const ExampleTwo = () => {
    
    const [toggle, setToggle] = useState("On");

    // const handleToggle = () => {
    //     if(toggle === "On") {
    //         setToggle("Off")
    //     } else setToggle("On")
    // }

    return (
        <div>
            <h1>The toggle is {toggle}</h1>
            <button onClick={() => setToggle("Off")}>On</button>
            <button onClick={() => setToggle("On")}>Off</button>
        </div>
    )
}