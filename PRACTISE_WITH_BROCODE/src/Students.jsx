import React from "react"
//Yung key doon sa App mapupunta dito sa Props na argument 
const Students = (props) => {
    return (
        <div className="Student" >
            <p>Name:{props.name}</p>
            <p>Age:{props.age}</p>
            <p>Student:{props.isStudent?"Yes":"No"}</p>
        </div>
    )
}
export default Students