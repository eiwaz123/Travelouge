import ComponentsC from "./contextwithComponent C"
import React,{ useContext} from "react";
import {userContext} from "./contextwithComponent";
const ComponentsB=()=>{
    const user=useContext(userContext)
return (
    <div className="box">
        <h1>ComponentsB</h1>
        <p>Hello B</p>
        <p>Hello {`${user}`}</p>
        <ComponentsC  />
    </div>
)
}
export default ComponentsB