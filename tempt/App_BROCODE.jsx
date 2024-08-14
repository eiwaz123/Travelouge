import Card from "./Card";
import Students from "./Students";
import List from "./List";
const listahan = [
  { id: 1, Name: "Meat", calories: 500 },
  { id: 2, Name: "Rice", calories: 69 },
  { id: 3, Name: "Fish", calories: 450 },
  { id: 4, Name: "Vegetable", calories: 50 },
  { id: 5, Name: "Fruis", calories: 100 },
  { id: 6, Name: "Juice", calories: 200 },
  { id: 7, Name: "poultry", calories: 450 },
];
const Junkfood = [
  { id: 6, Name: "piatos", calories: 500 },
  { id: 7, Name: "shippy", calories: 69 },
  { id: 8, Name: "Nacho", calories: 450 },
  { id: 9, Name: "tatoos", calories: 50 },
  { id: 10, Name: "Vcut", calories: 100 },
  { id: 11, Name: "Nova", calories: 200 },
  { id: 12, Name: "tommy", calories: 450 },
];
function App() {
  return (
    <>
      {/* Bali dito si name at age ayy isang Key at pinapasa neto yung data neto patungo sa Students */}
      {/* <Students name="Roi" age="22" isStudent={true} />
      <Students name="Rio" age="22" isStudent={false} />
      <Students name="Ior" age="23" isStudent={true} /> */}

      {listahan.length>0?<List items={listahan} category="Food" />:null} 
      {Junkfood.length>0&&<List items={Junkfood} category="Snack" />}
   </>
  );
}
  
export default App;
