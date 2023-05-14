// import React from "react";

// function MenuBar(props) {
  /*

  The 'span' tags below are the menu items. Think about the way a menu 
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?

  */

//   return (
//     <div className="ui four item menu">
//       <span className="item active">
//         <i className="user large icon" />
//       </span>

//       <span className="item">
//         <i className="photo large icon" />
//       </span>

//       <span className="item">
//         <i className="cocktail large icon" />
//       </span>

//       <span className="item">
//         <i className=" themeisle large icon" />
//       </span>
//     </div>
//   );
// }

// export default MenuBar;




// import React from "react";

// function MenuBar({ handleClick, selectedItem }) {
//   function setClassName(name) {
//     return selectedItem === name ? "item active" : "item";
//   }

//   return (
//     <div className="ui four item menu">
//       <span
//         onClick={() => handleClick("profile")}
//         className={setClassName("profile")}
//       >
//         <i className="user large icon" />
//       </span>

//       <span
//         onClick={() => handleClick("photos")}
//         className={setClassName("photos")}
//       >
//         <i className="photo large icon" />
//       </span>

//       <span
//         onClick={() => handleClick("cocktails")}
//         className={setClassName("cocktails")}
//       >
//         <i className="cocktail large icon" />
//       </span>

//       <span
//         onClick={() => handleClick("pokemon")}
//         className={setClassName("pokemon")}
//       >
//         <i className=" themeisle large icon" />
//       </span>
//     </div>
//   );
// }

// export default MenuBar;


import React from "react";

function MenuBar({menuSelection,setMenuSelection}) {
  /*
  The 'span' tags below are the menu items. Think about the way a menu 
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?
  */
 

  return (
    <div className="ui four item menu">
      <span value="profile" className={menuSelection === 'profile' ? "item active":"item"} onClick={()=> setMenuSelection('profile') }>
        <i className="user large icon" />
      </span>

      <span value="pictures" className={menuSelection === 'pictures' ? "item active":"item"} onClick={()=> setMenuSelection('pictures') }>
        <i className="photo large icon" />
      </span>

      <span value="cocktail" className={menuSelection === 'cocktail' ? "item active":"item"} onClick={()=> setMenuSelection('cocktail') }>
        <i className="cocktail large icon" />
      </span>

      <span value="pokemon" className={menuSelection === 'pokemon' ? "item active":"item"} onClick={()=> setMenuSelection('pokemon') }>
        <i className=" themeisle large icon" />
      </span>
    </div>
  );
}

export default MenuBar;