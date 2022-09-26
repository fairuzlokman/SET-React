import { useState } from "react"

export const DropDown = () => {
    
    const colors = [
        {color: "blue"},
        {color: "red"},
        {color: "yellow"},
    ]

    const countries = [
        {country: "Malaysia"},
        {country: "Indonesia"},
        {country: "Australia"},
        {country: "New Zealand"},
    ]

    const [origin, setOrigin] = useState("")
    
    return (
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            width: "500px",
        }}>
        <h1>Country: {origin}</h1>
        <button className="dropdown-btn">Country
            {countries.map((item) => (
                <div className="content" onClick={() => setOrigin(item.country)}>
                    {item.country}
                </div>
            ))}
        </button>
        </div>
    )
}