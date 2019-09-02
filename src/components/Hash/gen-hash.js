import React, { Component } from "react";
import { TextInput, Button, Combobox } from "evergreen-ui";
import crypto from "crypto";
import mapper from "./color-mapper.json";

class genHash extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: "",
      algorithmOptions: ["md5", "sha1", "sha256", "sha512"],
      algorithm: "sha256",
      dataHexCode: []
    };
  }

  onChange = event => {
    // console.log(event);

    this.setState({
      [event.target.name]: event.target.value
    });
  };

  generateHash = (algorithm, data) => {
    try {
      const hash = crypto.createHash(algorithm);

      hash.update(data);

      const dataHash = hash.digest("hex");
      this.setState({
        dataHexCode: dataHash
      });
      console.log(dataHash, typeof dataHash);
      return {
        status: true,
        message: dataHash
      };
    } catch (error) {
      console.error(error);
      return {
        status: false,
        message: "Something went wrong!"
      };
    }
  };

  gridHexColors = (algorithm, data) => {
    let hash = this.generateHash(algorithm, data).message.split("");

    let grid = [];
    for (let i = 0; i < hash.length; i++) {
      grid.push(mapper[hash[i]]);
    }
    // console.log(grid);
    this.setState({
      dataHexCode: grid
    });
  };

  render() {
    //this.generateHash("sha256", "shubham");
    return (
      <div>
        <TextInput
          name="data"
          placeholder="Text input placeholder..."
          onChange={this.onChange}
          value={this.state.data}
        />
        <Combobox
          width={100}
          defaultSelectedItem={"sha256"}
          items={this.state.algorithmOptions}
          onChange={value =>
            this.onChange({
              target: {
                name: "algorithm",
                value: value
              }
            })
          }
          placeholder="Algorithm"
          openOnFocus
        />
        <Button
          onClick={() =>
            this.gridHexColors(this.state.algorithm, this.state.data)
          }
        >
          my hash
        </Button>
        <div style={{ wordWrap: "break-word" }}>
          {this.state.dataHexCode.length}
          {this.state.dataHexCode}
        </div>
      </div>
    );
  }
}

export default genHash;
