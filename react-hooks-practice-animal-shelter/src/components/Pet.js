import React from "react";

function Pet({pet, handleAdopt}) {
  const {name, type, age, weight, isAdopted, gender, id} = pet

  const GENDER = {
    male: '♂',
    female: '♀'
  };

  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
        {GENDER[gender]}&nbsp; {" "}
          {name}
        </span>
        <div className="meta">
          <span className="date">{type}</span>
        </div>
        <div className="description">
          <p>Age: {age}</p>
          <p>Weight: {weight}kg</p>
        </div>
      </div>
      <div className="extra content">
        {isAdopted ? 
          ( <button className="ui disabled button">Already adopted</button>) : 
          ( <button className="ui primary button" onClick={() => handleAdopt(id)}>Adopt pet</button> )
        }
      </div>
    </div>
  );
}

export default Pet;
