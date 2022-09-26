import { useState } from "react";

export const ColorPicker = () => {
    
    // const color = "";
    
    const [color, setColor] = useState("Blue")
    
    const divStyle = {backgroundColor: color};

    return (
        <div style={divStyle}>
            <p>The color is {color}</p>
            <button onClick={() => setColor("Aquamarine")}>Aquamarine</button>
            <button onClick={() => setColor("BlueViolet")}>BlueViolet</button>
            <button onClick={() => setColor("Chartreuse")}>Chartreuse</button>
            <button onClick={() => setColor("CornflowerBlue")}>CornflowerBlue</button>
        </div>
    )
}