import React, { useState, useRef, useEffect } from "react";
const TestRef = () => {
//   let [numero, setNumero] = useState(0);
  const inputRef=useRef(null)
  useEffect(() => {
    console.log("RENDERED");
    console.log(inputRef)
  });
  const handleClick = () => {
    // setNumero((numero) => numero + 1);
    // ref.current++
    //console.log(ref.current)
    inputRef.current.focus();
  }
  return (
    <div>
      <h1>Hello</h1>
      <button onClick={handleClick}> click me to add!</button>
      {/* <h1>{numero}</h1> */}
      <input ref={inputRef} type="text" />
    </div>
  );
};
export default TestRef;
