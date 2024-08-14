import React from "react";
import Title from "./Components/Title";
import Travel from "./Components/Travel";
import {datas} from "./Components/data";

function App() {
  const Cards = datas.map((item) => {
    return <Travel key={item.id} {...item} />;  
  });

  return (
    <>
      <div>
        <Title />
        {Cards}
      </div>
    </>
  );
}

export default App;
