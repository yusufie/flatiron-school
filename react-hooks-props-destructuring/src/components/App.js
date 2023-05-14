import React from "react";
import MovieCard from "./MovieCard";

function App() {
  const title = "Mad Max";
  const posterURL ="https://picsum.photos/seed/picsum/200/300";
  const genresArr = ["Action", "Adventure", "Science Fiction", "Thriller"];

  return (
    <div className="App">
      <MovieCard title={title} genres={genresArr} />
      <MovieCard title={"Example"} genres={["action", "science"]} posterSrc={posterURL}/>
    </div>
  );
}

export default App;