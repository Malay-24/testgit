import React from 'react'

const Counter = () => {
    const [count,setCount]=React.useState(0)
  return (
    <div>
        <h1>Counter</h1>
        <h1>Count:{count}</h1>
        <button onClick={()=> setCount(count+2)}>Inc</button>
        <button onClick={()=> setCount(count-2)}>Dec</button>
    </div>
  )
}

export default Counter