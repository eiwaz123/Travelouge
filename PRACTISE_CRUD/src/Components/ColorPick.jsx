import react,{useState} from "react";
const ColorPick = () => {
    const [color,SetColor]=useState("#FFFFFF")
    const handleColorChange=(event)=>{
        SetColor(event.target.value)
    }
  return <div>
    <div className="ColorPicker">
        <h1>Color picker</h1>
        <div className="Color-Display" style={{backgroundColor:color}} >
            <p>Selected Color:{color}</p>

        </div>
            <label htmlFor="">Select a color</label>
            <input type="color" value={color} onChange={handleColorChange} />
    </div>
  </div>;

};

export default ColorPick;
