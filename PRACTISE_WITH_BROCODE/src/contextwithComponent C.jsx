
import React,{ useContext} from "react";
import {userContext} from "./contextwithComponent";
const ComponentsC=()=>{
    const user=useContext(userContext)
return (
    
    <div className="box">
        <h1>ComponentsC</h1>
        <p>Hello C</p>
        <h2>{`${user}`}</h2>

    </div>
)
}
export default ComponentsC