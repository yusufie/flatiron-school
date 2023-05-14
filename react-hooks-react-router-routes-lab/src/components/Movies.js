import React from "react";
import { movies } from "../data";

function Movies() {
  const movieList= movies.map((mov)=>{
    const genreList = (mov.genres).map((gen)=><li key={Math.floor(Math.random()  * (1000 - 100)) + 100}>{gen}</li>);
    return (
      <div >
         <h1>{mov.title}</h1>
         <h2>{mov.time}</h2>
         <ul>
           {genreList}
         </ul>
      </div>
    )
})
return(
  <div>
    <h1>Movies Page</h1>
    {movieList}
  </div>
)
}

export default Movies;
