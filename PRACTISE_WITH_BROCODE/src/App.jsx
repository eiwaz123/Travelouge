import Card from "./Card";
import Students from "./Students";
import Button from "../../tempt/Button";
import { useState } from "react";
import Mycomponentwithstate from "./Components";
import Counter from "./Counter";
import ColorPick from "../../PRACTISE_CRUD/src/Components/ColorPick";
import Persondata from "./listahanpangalan";
import TodoList from "./TodoList";
import Mycomponentwitheffect from "./componentUseEffect";
import DigitalClock from "./DigitalClock";
import ComponentsA from "./contextwithComponent";
import ComponentsB from "./contextwithComponent";
import ComponentsC from "./contextwithComponent";
import TestRef from "./testRefs";
import StopWatch from "./Stop_watch";
// import List from "./List";

function App() {
  return (
  
      <div>
    
        {/* Bali dito si name at age ayy isang Key at pinapasa neto yung data neto patungo sa Students */}
        {/* <Students name="Roi" age="22" isStudent={true} />
      <Students name="Rio" age="22" isStudent={false} />
      <Students name="Ior" age="23" isStudent={true} /> */}

        {/* {listahan.length>0?<List items={listahan} category="Food" />:null} 
      {Junkfood.length>0&&<List items={Junkfood} category="Snack" />} */}
        {/* <Mycomponentwithstate />  */}
        {/* <Counter /> */}
        {/* <ColorPick /> */}
        {/* <Persondata /> */}
        {/* <TodoList /> */}
        {/* <Mycomponentwitheffect /> */}
    
        <StopWatch/>
        {/* <div className="Context">
          <ComponentsA />
        </div> */}
           {/* <TestRef /> */}

      </div> 
 
  );
}

export default App;
