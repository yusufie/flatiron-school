// import React from "react";
// import MenuBar from "./MenuBar";
// import { Profile, Photos, Cocktails, Pokemon } from "./pages";

// function MainBox() {
  /*
    Replace the code below! Depending on what menu item is selected in the menu, 
    I should render either a Profile, Photos, Cocktails, or Pokemon component.
    Think of a way to track which menu item was selected. 
    - Which component should have state? 
    - Which component should have methods to control state? 
    - Where should these methods be called?
  */

//   let detailsToDisplay = <div>Hi, I'm a div!</div>;

//   return (
//     <div>
//       <MenuBar />
//       {detailsToDisplay}
//     </div>
//   );
// }

// export default MainBox;


// import React, { useState } from "react";
// import MenuBar from "./MenuBar";
// import { Profile, Photos, Cocktails, Pokemon } from "./pages";

// function MainBox() {
//   const [selectedItem, setSelectedItem] = useState("profile");

//   function handleMenuClick(item) {
//     setSelectedItem(item);
//   }

  // let detailsToDisplay = () => {
  //   if (selectedItem === "profile") {
  //     return <Profile />;
  //   } else if (selectedItem === "photos") {
  //     return <Photos />;
  //   } else if (selectedItem === "cocktails") {
  //     return <Cocktails />;
  //   } else {
  //     return <Pokemon />;
  //   }
  // };

//   let detailsToDisplay = {
//     profile: <Profile />,
//     photos: <Photos />,
//     cocktails: <Cocktails />,
//     pokemon: <Pokemon />,
//   };

//   return (
//     <div>
//       <MenuBar handleClick={handleMenuClick} selectedItem={selectedItem} />
//       {detailsToDisplay[selectedItem]}
//     </div>
//   );
// }

// export default MainBox;



import React, {useState} from "react";
import MenuBar from "./MenuBar";
import { Profile, Photos, Cocktails, Pokemon } from "./pages";

function MainBox() {
  /*
    Replace the code below! Depending on what menu item is selected in the menu, 
    I should render either a Profile, Photos, Cocktails, or Pokemon component.
    Think of a way to track which menu item was selected. 
    - Which component should have state? 
    - Which component should have methods to control state? 
    - Where should these methods be called?
  */
    const [menuSelection, setMenuSelection] = useState('profile')
    
  
  let detailsToDisplay = {
    profile:<Profile />,
    pictures: <Photos />,
    cocktail: <Cocktails/>,
    pokemon:<Pokemon/>
  }

  return (
    <div>
      <MenuBar menuSelection={menuSelection} setMenuSelection={setMenuSelection}/>
      {detailsToDisplay[menuSelection]}
    </div>
  );
}

export default MainBox;