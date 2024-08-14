import React, { useState } from "react";
const Mycomponentwithstate = () => {
    const [name, setName] = useState("Guest");
    const handleNameChange=(event)=>{
        setName(event.target.value)
    }


//   const [name, setName] = useState("Guest");
//   const [age,setAge]=useState(0)
//   const updateName = () => {
//     setName("Roi");
//     console.log(name);
//   };

//   const incrementAge = () => {
//     setAge(age+2)
 // }

  return (
    <div>
            <input type="text" value={name} onChange={handleNameChange} />
            <p>Name:{name}</p>











        {/* <div> */}
      {/* Name:{name}
      <br />
      {/* <button onClick={updateName}>Set Name</button> */}
      {/* </div> */}
      {/* <div> */} 
      {/* // */}
      {/* <h1>Age:{age}</h1> */}
      {/* <button onClick={incrementAge}>INCREMENT AGE</button> */}
      {/* </div> */}
    </div>
  );
};

export default Mycomponentwithstate;
