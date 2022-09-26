import { useEffect } from "react"
import { useState } from "react"

export const AlertCounter = () => {
    
    const [count, setCount] = useState(0)

    
    const handleCounter = () => {
        setCount(prevState => prevState + 1)
    }
    
    useEffect(() => alert(count), [count])

    return (
        <div>
            <h4>Timer Count: {count}</h4>
            <button onClick={() => handleCounter()}>Click me</button>
        </div>
    )
}