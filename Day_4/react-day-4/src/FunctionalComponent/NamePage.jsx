import { useState } from "react"

export const NamePage = () => {
    
    const [name, setName] = useState("Hello")

    // const useEffect
    
    return (
        <div>
            <title>{name}</title>
            <p>Use the input field to rename this page!</p>
            <input
                onChange={(e) => {setName(e.target.value)}}
                type="text" />
        </div>
    )
} 