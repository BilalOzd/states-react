import './App.css';
import { useState } from 'react'

function App() {

  const [name, setName] = useState("Bilal")
  const [age, setAge] = useState(22)
  const [brands , setBrands] = useState(["Koenigsegg", "McLaren", "RAM"])
  const [carParts, setCarParts] = useState({spoilerBrand: "Aisin", wheels: "sport", NOdoors: 2})

  console.log(brands);
  console.log(carParts);

  return (
    <div className="App">
      
        <h2>{name} {age}</h2>

        <button onClick = {() => setName("Ayça")}>CHANGE NAME</button>
        <br></br>
        <button onClick = {() => setAge(29)}>CHANGE AGE</button>
        <br></br>      <hr></hr>

        <h2>{brands.map(
          (brand, key) =>
            <div key={key}>{brand}</div>
        )}</h2>
        <button onClick = {() => setBrands([...brands, "Lamborghini"])}>ADD BRAND</button>
        <br></br>      <hr></hr>

        <h2>
         {carParts.spoilerBrand} {carParts.NOdoors}
        </h2>
        <div>
        <button onClick = {() => setCarParts({...carParts, spoilerBrand: "xDrive"})}>CHANGE spoilerBrand</button>
        <button onClick = {() => setCarParts({...carParts, NOdoors: 4})}>CHANGE NOdoors</button>
        </div>

    </div>
  );
}

export default App;
