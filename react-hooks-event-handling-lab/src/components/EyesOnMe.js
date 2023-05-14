// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe() {
    function focus() {
        console.log("Good!");
    }

    function Blur() {
        console.log("Hey! Eyes on me!");
    }

    return (
        <button onFocus={focus} onBlur={Blur}>
            Eyes on me
        </button>
    );
}

export default EyesOnMe;