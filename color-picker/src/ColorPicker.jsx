import React, { useState } from 'react'
function ColorPicker() {
    const [color, setColor] = useState("#FFFFFF");
    const changeColor = (event) => {
        setColor(event.target.value);
    }

    return (<>
        <div id="container">
            <h1 id="header">Color Picker</h1>
            <p id="pColor" style={{ backgroundColor: color }}> Selected color:{color} </p>
            <label id="colorLabel">Select a color: </label>
            <input type="color" id="colorInput" name="color" onChange={changeColor} />
        </div>
    </>);
}
export default ColorPicker