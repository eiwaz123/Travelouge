import React from "react";
import { useState } from "react";

const Header = () => {
    const [count,setCount] = useState(0)
    const[firstName,setfirstName] = useState("")
    const[lastName,setlastName] = useState("")
    const[fullName,setfullName]=useState("")
    const handlefirstName =(event)=>{
        setfirstName(event.target.value);
    }
    const handlelastName =(event)=>{
        setlastName(event.target.value);
        
    }
    const handlefullName =()=>{
        setfullName(firstname+lastname)
        console.log(fullName)
        
    }
    const addNumber =()=>{
        setCount(count+1)

        console.log(count)
    }
    
  return (
    <div className="header">
      <nav className="navbar navbar-light bg-light">
        <form className="container-fluid justify-content-start">
          <button className="btn btn-outline-success me-2" type="button" onClick={addNumber}>
            Add number
          </button>
          <h1>{count}</h1><br />
        <input type="text" value={firstName} onChange={handlefirstName} placeholder="Enter First Name" />
        <input type="text" value={lastName} onChange={handlelastName} placeholder="last Name" />
        <h1>Your Name is {firstName} {lastName}</h1>
       {/* <br /> <button className="btn btn-outline-success" onClick={handlefullName}>Submit</button> */}
   
        </form>
      </nav>
    </div>
  );
};
export default Header;