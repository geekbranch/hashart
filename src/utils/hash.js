import crypto from "crypto";
import mapper from "./color-mapper.json";

const generateHash = (algorithm, string) => {
  const hash = crypto.createHash(algorithm);
  hash.update(string);
  const dataHash = hash.digest("hex");

  return dataHash;
};

const gridHexColors = (algorithm, data) => {
  const hash = generateHash(algorithm, data).split("");

  const grid = [];
  for (let i = 0; i < hash.length; i++) {
    grid.push(mapper[hash[i]]);
  }

  return grid;
};

export default gridHexColors;
