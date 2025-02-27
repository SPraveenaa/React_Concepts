import React, { useState } from 'react'

function Home() {
    const [name,setName] = useState("Praveenaa");
    console.log("abc",name);
  return (
    <div><h1>Home Page</h1>

        <h2>My name is : { name }</h2>

        <button onClick={ () => setName("Chellakutty") }
        >Click Me</button>
        

    </div>
  )
}

export default Home;