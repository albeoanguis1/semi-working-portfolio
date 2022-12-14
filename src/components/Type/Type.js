import React from "react";
import Typewriter from "typewriter-effect";
import './type.css'

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Developer",
          "Veteran",
          "Achiever"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 75,
       
      }}
    />
  );
}

export default Type;
