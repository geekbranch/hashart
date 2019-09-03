import React, { useState, useEffect } from "react";
import Form from "./form.js";
import gridHexColors from "../../utils/hash.js";

const FormContainer = ({ computeColorArray }) => {
  const [text, setText] = useState("");
  const [algorithms, setAlgorithms] = useState([
    "md5",
    "sha1",
    "sha256",
    "sha512"
  ]);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("sha256");
  const [dataHexCode, setDataHexCode] = useState([]);

  useEffect(() => {
    computeColorArray(dataHexCode);
    console.log(dataHexCode)
  }, [dataHexCode]);

  const onTextChange = e => {
    setText(e.target.value);
  };

  const onComboBoxChange = selected => {
    setSelectedAlgorithm(selected);
  };

  const onSubmitClick = () => {
    computeColorArray([]);
    setDataHexCode(gridHexColors(selectedAlgorithm, text));
  };

  const onResetClick = () => {
    computeColorArray([]);
    setText("");
    setSelectedAlgorithm("sha256");
  };

  return (
    <Form
      text={text}
      algorithms={algorithms}
      onSubmitClick={onSubmitClick}
      onResetClick={onResetClick}
      selectedAlgorithm={selectedAlgorithm}
      onTextChange={onTextChange}
      onComboBoxChange={onComboBoxChange}
    />
  );
};

export default FormContainer;
