import React, {useState} from "react";

function PlantCard( { id, image, name, price }) {
  const [sold, setSold] = useState(false)
  
  function handleSold() {
    setSold(sold => !sold)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {!sold ? (
        <button className="primary" onClick={handleSold}>In Stock</button>
      ) : (
        <button onClick={handleSold}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
