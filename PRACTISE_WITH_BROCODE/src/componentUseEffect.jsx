import react, { useState, useEffect } from "react";

const Mycomponentwitheffect = () => {
  const [count, setCount] = useState(0);
  const [color, Setcolor] = useState("green");
  useEffect(() => {
    document.title = `${count} clicks ${color}`;
    return () => {
        
    }
  }, [count, color]);

  const handleAddCount = () => {
    setCount((c) => c + 1);
  };
  const handleMinusCount = () => {
    setCount((c) => c - 1);
  };
  const handleChangeColor = () => {
    Setcolor((c) => (c === "green" ? "red" : "green"));
  };
  return (
    <div>
      <p style={{ color: color }}>Count:{count}</p>
      <button onClick={handleAddCount}>Add</button>
      <button onClick={handleMinusCount}>Subtract</button>
      <button onClick={handleChangeColor}>Change Color</button>
    </div>
  );
};

export default Mycomponentwitheffect;
