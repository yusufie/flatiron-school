import React from "react";
import TopMenu from "./TopMenu";
import GenrePicker from "./GenrePicker";
import MainContent from "./MainContent";
import SideMenu from "./SideMenu";

function App() {
  return (
    <div className="app-container">
      <div className="main-content">
        <TopMenu />
        <GenrePicker />
        <MainContent />
      </div>

      <SideMenu />
    </div>
  );
}

export default App;
