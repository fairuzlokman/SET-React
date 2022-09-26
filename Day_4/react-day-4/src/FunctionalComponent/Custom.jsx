import useCounter from "../hooks/useCounter"

const Custom = () => {
    
    const counter = useCounter();
    
    return (
        <div>
            <h1>{counter.value}</h1>
            <button onClick={() => counter.increase(10)}>+</button>
            <button onClick={() => counter.decrease(20)}>-</button>
            <button onClick={() => counter.reset()}>reset</button>
        </div>
    )
}

export default Custom;