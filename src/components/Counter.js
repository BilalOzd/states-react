import { useState } from "react";

function Counter() {
    //default value is 0.
    const [count, setCount] = useState(0)

    const increase = () => {
        setCount(count+1)
    }
    const decrease = () => {
        setCount(count-1)
    }

    return(
        <div className="Counter">

        <h2><i>{count}</i></h2>
        <button onClick={increase}>increase</button>
        <button onClick={decrease}>decrease</button>
        
    </div>
    )   
}

export default Counter