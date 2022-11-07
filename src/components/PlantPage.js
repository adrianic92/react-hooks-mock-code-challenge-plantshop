import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState("")

  useEffect( () => {
    fetch("http://localhost:6001/plants")
      .then(resp => resp.json())
      .then(data => setPlants(data))
  })

  function addNewPlant(newPlant) {
    setPlants( [...plants, newPlant] )
  }

  function searcher(plant) {
    setSearch(plant)
  }

  const filteredPlants = plants.filter( plant => plant.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <main>
      <NewPlantForm plants={plants} addNewPlant={addNewPlant}/>
      <Search searcher={searcher} plants={plants}/>
      <PlantList plants={filteredPlants}/>
    </main>
  );
}

export default PlantPage;
