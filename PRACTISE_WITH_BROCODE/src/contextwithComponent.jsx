import React, { useState,createContext } from "react";
import ComponentsB from "./contextwithComponent B";
export const userContext = createContext();
const ComponentsA = () => {
  const [user, setUser] = useState("Roi");
  return (
    <div className="box">
      <h1>ComponentsA</h1>
      <h2>{`Hello ${user}`}</h2>
      <userContext.Provider value={user}>
      <ComponentsB user={user} />
      </userContext.Provider>
     
    </div>
  );
};
export default ComponentsA;
