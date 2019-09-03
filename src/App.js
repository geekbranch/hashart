import React, { useState } from "react";
import { Button } from "evergreen-ui";
import Splitter from "./components/Splitter/Splitter.js";
import Hash from "./components/Hash/gen-hash.js";
import Form from "./components/form/formContainer.js";
import Chart from "./components/Chart/Chart.js";

function App() {
  const [colorArray, setColorArray] = useState([]);

  const computeColorArray = cArray => {
    setColorArray(cArray);
  };

  return (
    <div>
      <Splitter
        leftPane={<Form computeColorArray={computeColorArray} />}
        rightPane={<Chart colorArray={colorArray} />}
      />
    </div>
  );
}

export default App;
