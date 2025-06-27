import React, { useState } from 'react'

function Component() {
    const [cars, setCars] = useState([]);
    const [year, setYear] = useState(new Date().getFullYear());
    const [make, setMake] = useState("");
    const [model, setModel] = useState("");

    function handleCarAdd(event) {
        const newCar = {
            year,
            make,
            model
        };

        setCars(prevCars => [...prevCars, newCar]);
        setYear(new Date().getFullYear());
        setMake("");
        setModel("");
    }

    function handleCarRemove(index) {
        setCars(prevCars => prevCars.filter((_, i) => i !== index));
    }

    function handleYearChange(event) {
        setYear(event.target.value);
    }

    function handleMakeChange(event) {
        setMake(event.target.value);
    }

    function handleModelChange(event) {
        setModel(event.target.value);
    }

    return (<>
        <div id="container">
            <h1>List of Car Objects</h1>
            <ul>
                {cars.map((car, index) =>
                    <li key={index} onClick={() => handleCarRemove(index)}>{car.year} {car.make} {car.model}</li>)
                }
            </ul>

            <input type="number" id="year-input" value={year} onChange={handleYearChange}></input>
            <input type="text" id="make-input" value={make} placeholder="Enter car make" onChange={handleMakeChange}></input>
            <input type="text" id="model-input" value={model} placeholder="Enter car model" onChange={handleModelChange}></input>
            <button id="btn" onClick={handleCarAdd}>Add</button>
        </div>
    </>)
}

export default Component