import React from "react";
import Article from "./Article";
import Comment from "./Comment";

function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}

function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
}

function About() {
  return (
    <div id="about">
      <h2>About</h2>
    </div>
  );
}

function App() {
  return (
    <div>
      <Article />
      <Comment />
      <About />
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
