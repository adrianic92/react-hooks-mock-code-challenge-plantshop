import React from "react";
import PlantCard from "./PlantCard";

function PlantList( {plants} ) {
  
  const allPlants = plants.map( plant => {
    return (
      <PlantCard key={plant.id} image={plant.image} name={plant.name} price={plant.price} id={plant.id} />
    )
  })
  
  
  return (
    <ul className="cards">{allPlants}</ul>
  );
}

export default PlantList;
