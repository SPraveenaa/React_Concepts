import React, { useState } from 'react'
import { Card, Col, Row } from 'antd';


// Name will change when click the button "Click Me"-----------------------------------------------------

// function Home() {
//     const [name,setName] = useState("Praveenaa");
//     console.log("abc",name);
//   return (
//     <div><h1>Home Page</h1>

//         <h2>My name is : { name }</h2>

//         <button onClick={ () => setName("Chellakutty") }
//         >Click Me</button>
        
//     </div>
//   )
// }

// export default Home;

//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


//Number will change untill 20 by adding 2--------------------------------------------------------------

// function Home(){
//   const [number, setNum] = useState (0);

//   return(
//     <div>
//       <h1>The number is: { number }</h1>
//       <br/>
//       <button onClick={ ()=> setNum (number+2)} disabled={number>=20}>Add 2</button>

//     </div>
//   );

// }

// export default Home;

//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


//Using map objects-------------------------------------------------------------------------------------

function Home(){
  const person = [
    {name: "Praveenaa", index: "IT2020130", GPA: 3.789,id:1},
    {name: "Divya", index: "IT2020127", GPA: 3.123,id:2},
    {name: "Raja", index: "IT2020125", GPA: 2.155,id:3}
  ];

  return(
    <div>
    
    <h2>Find Your GPA Below</h2>
    <Row gutter={16}>
      {person.map((student) => (
        <Col span={8} key={student.id}>
          <Card title={`Student: ${student.name}`} bordered={false}>
            <h4>Index Number: {student.index}</h4>
            <h4>GPA: {student.GPA}</h4>
          </Card>
        </Col>
      ))}
    </Row>
  </div>
  );
}

export default Home;

//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^