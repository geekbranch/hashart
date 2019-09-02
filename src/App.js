import React from "react";
import { Button } from "evergreen-ui";
import Splitter from "./components/Splitter/Splitter.js";
import Hash from "./components/Hash/gen-hash.js";

function App() {
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
        rightPane={<p>right</p>}
      />
    </div>
  );
}

export default App;
