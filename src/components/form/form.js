import React from "react";
import { Pane, Button, Text, Heading, TextInput, Combobox } from "evergreen-ui";

const Form = ({
  text,
  algorithms,
  selectedAlgorithm,
  onTextChange,
  onComboBoxChange,
  onSubmitClick,
  onResetClick
}) => {
  return (
    <Pane>
      <Pane display="flex" padding={16} borderRadius={3}>
        <Pane flex={1} alignItems="center" display="flex">
          <TextInput
            placeholder="Text input"
            onChange={onTextChange}
            value={text}
          />
        </Pane>
      </Pane>

      <Pane padding={16} borderRadius={3}>
        <Combobox
          items={algorithms}
          selectedItem={selectedAlgorithm}
          placeholder="Algorithm"
          onChange={onComboBoxChange}
          openOnFocus
        />
      </Pane>

      <Pane padding={16} borderRadius={3}>
        <Button
          appearance="success"
          intent="success"
          marginRight={16}
          onClick={onSubmitClick}
        >
          Submit
        </Button>
        <Button appearance="success" intent="danger" onClick={onResetClick}>
          Reset
        </Button>
      </Pane>
    </Pane>
  );
};

export default Form;
//<Heading size={600}>Left Aligned</Heading>
