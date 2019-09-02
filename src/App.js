import React from "react";
import { Button } from "evergreen-ui";
import Splitter from "./components/Splitter/Splitter.js";
import Hash from "./components/Hash/gen-hash.js";
import Chart from "./components/Chart/Chart.js"

function App() {
  const colorArray = [
    "#1a1c2c",
    "#5d275d",
    "#b13e53",
    "#ef7d57",
    "#ffcd75",
    "#a7f070",
    "#38b764",
    "#257179",
    "#29366f",
    "#3b5dc9",
    "#41a6f6",
    "#73eff7",
    "#f4f4f4",
    "#94b0c2",
    "#566c86",
    "#333c57"
  ];

  return (
    <div>
      <Button>I am using Evergreen!</Button>
      <Splitter
        leftPane={
          <p>
            {" "}
            <Hash></Hash>
          </p>
        }
        rightPane={<Chart colorArray={colorArray}/>} 
      />
    </div>
  );
}

export default App;
