import './App.css';
import { useState } from 'react'

function App() {

  const [name, setName] = useState("Bilal")
  const [age, setAge] = useState(22)
  const [brands , setBrands] = useState(["Koenigsegg", "McLaren", "RAM"])

  console.log(brands);

  return (
    <div className="App">
      
      <h2>{name} {age}</h2>

      <button onClick = {() => setName("Karahanlı")}>CHANGE NAME</button>
      <br></br>
      <button onClick = {() => setAge(29)}>CHANGE AGE</button>
      <br></br>      <hr></hr>

      <h2>{brands.map(
        (brand, key) =>
          <div key={key}>{brand}</div>
      )}</h2>
      <button onClick = {() => setBrands([...brands, "Lamborghini"])}>ADD BRAND</button>

    </div>
  );
}

export default App;
