import React,{ useContext } from 'react'
import { CounterContext } from '../Context/CommonContext';


function Propspage() {
  const {count} = useContext(CounterContext);

  return (
    <div>Propspage

    <h1>Count: { count }</h1>
    </div>
  )
}

export default Propspage;