import react, { useState } from "react";
const Persondata = () => {
  const [car, setCar] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarmodel] = useState("");

  const handleAddCar = () => {
    const newCar = {
      year: carYear,
      make: carMake,
      model: carModel,
    };
    setCar((c) => [...c, newCar]);
    // setCarYear(new Date().getFullYear());
    // setCarMake("");
    // setCarmodel("");
  };
  const handlRemoveCar = (index) => {
    setCar((c) => c.filter((_, i) => i !== index));
  };
  const handleYearChange = (event) => {
    setCarYear(event.target.value);
  };
  const handleCarMake = (event) => {
    setCarMake(event.target.value);
  };
  const handleCarModel = (event) => {
    setCarmodel(event.target.value);
  };

  return (
    <div>
      <h1>List of Cars</h1>
      <ul>
        {car.map((car, index) => (
          <li key={index} onClick={()=>handlRemoveCar(index)} >
            {car.year} {car.make} {car.model}
          </li>
        ))}
      </ul>
      <input type="number" value={carYear} onChange={handleYearChange} />
      <br />
      <input
        type="text"
        value={carMake}
        onChange={handleCarMake}
        placeholder="Enter Car Manufacturer"
      />
      <input
        type="text"
        value={carModel}
        onChange={handleCarModel}
        placeholder="Enter Carmodel "
      />

      <br />
      <button onClick={handleAddCar}>Add Car</button>
    </div>
  );
};
export default Persondata;
