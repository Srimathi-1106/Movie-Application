import React, { useState } from 'react'

function Counter1() {
  const [value,setValue]=useState(0);

  return (
    <div>
        <p>{`Counter value ${value}`}</p>
        <Child value={value} setValue={setValue} />
    </div>
  )
}

function Child({value,setValue}){
    return(
        <button onClick={()=>setValue(value+1)}>count</button>
    )
}

export default Counter1;



