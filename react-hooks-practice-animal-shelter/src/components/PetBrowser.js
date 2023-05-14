import React from "react";

import Pet from "./Pet";

function PetBrowser(props) {
  const {pets, handleAdopt} = props
  return <div className="ui cards">
    {pets.length > 0 && pets.map(pet => (
      <Pet key={pet.id} pet={pet} handleAdopt={(id) =>handleAdopt(id)} />
    ))}
  </div>;
}

export default PetBrowser;
