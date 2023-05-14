import React from "react";
import GetColor from "./GetColor";

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
    "blue",
  ];

  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>
      <GetColor colors={colors} />
        {/* <li style={{ color: colors[0] }}>{colors[0]}</li>
        <li style={{ color: colors[1] }}>{colors[1]}</li>
        <li style={{ color: colors[2] }}>{colors[2]}</li>
        <li style={{ color: colors[3] }}>{colors[3]}</li>
        <li style={{ color: colors[4] }}>{colors[4]}</li> */}
      </ol>
    </div>
  );
}

export default ColorList;
