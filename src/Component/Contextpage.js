import React,{ useContext, useEffect } from 'react'
import { CounterContext } from '../Context/CommonContext'

function Contextpage() {
    const {count,setCount} = useContext(CounterContext);


  return (
    <>
        <h1>Context Testing Page...</h1>
        <h2>Count: { count }</h2>
        <button onClick={ ()=> {setCount(count+1)} }>Button</button>
    </>
  )
}

export default Contextpage;
