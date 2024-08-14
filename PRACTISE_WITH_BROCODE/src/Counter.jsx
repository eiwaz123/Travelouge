import React, {useState} from "react";
const Counter = () => {
    const[count,setCount]=useState(0)
    const [person,setPerson]=useState({name:"Roi",age:"22",isStudent:"True"})
    const increment=()=>{
                // setCount(count+1);
                //Update function
                setCount(c=>c+1)
                setCount(c=>c+1)
                setCount(c=>c+1)
        
    }
     const decrement=()=>{
         setCount(count-1);
    }
     const reset=()=>{
        setCount(0);
     }
const handlePersonName=(event)=>{
    //BAWAL ANG GANTO KASE ANG LUMALABAS IS NAWAWALA ANG LUMANG OBJECT DAPAT MA RETAIN ANG OBJECT
//    setPerson({name:"Roi"})
//MANGYAYARI MADADAGDAGAN YUNG LAMAN NANG OBJECT YUNG NAME BABAGUHIN NYA YUNG NAME SA OBJECT KASE BAWAL DUPLICATE KUMBAGA MA OOVERWRITE ANG LAMAN NANG OBJECT SA PAMAMAGITAN NANG SPREAD OPERATOR
//ANG UPDATER HINDI NETO BINAGABO ANG CURRENT NA STATE NANG ISANG VARIABLE PERO NIREREFERENCE NETO ANG PREVIOUS STATE MAS SAFE TO
// KAYA LETTER ANG VARIABLE SA SPREAD OPERATOR AT SA IBA DAHIL PRA TO PAG INDICATE NA ETO YUNG PREVIOUS STATE
setPerson(p=>({...p,name:event.target.value}))

}
const handlePersonAge=(event)=>{
    setPerson(p=>({...p,age:event.target.value}))

}
const handleStudent=(event)=>{
    setPerson(p=>({...p,isStudent:event.target.value}))
   

}
    return (    
        <div>
            <h1>Counter</h1>
            <h1>{count}</h1>
            <button type="button" onClick={increment} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Increment</button>
            <button type="button" onClick={reset}  className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Reset</button>
            <button type="button" onClick={decrement} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Decrement</button>
            <div>
                <h1>Person</h1>
                <p>Youre {person.name} age {person.age} is student of cmu? {person.isStudent} </p>
                <input type="text" value={person.name} onChange={handlePersonName} />
                <input type="number" value={person.age} onChange={handlePersonAge} />
                <input type="text" value={person.isStudent} onChange={handleStudent} />
            </div>
        </div>
    )
}   
export default Counter