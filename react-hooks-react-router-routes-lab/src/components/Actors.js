import React from "react";
import { actors } from "../data";

function Actors() {
  const actorsList= actors.map((act)=>{
    const moviesList = (act.movies).map((mov)=><li key={Math.floor(Math.random()  * (1000 - 100)) + 100}>{mov}</li>);
    return (
      <div>
         <h1>{act.name}</h1>
         <ul>
           {moviesList}
         </ul>
      </div>)                                 
  })
  return(
  <div>
    <h1>Actors Page</h1>
      {actorsList}
  </div>)
}

export default Actors;
