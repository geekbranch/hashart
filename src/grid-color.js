const dataHash = require("./generate-hash");
const mapper = require("./color-mapper.json");
const gridColors = (algorithm, data) => {
  let hash = dataHash(algorithm, data).message.split("");

  let grid = [];
  for (let i = 0; i < 4; i++) {
    console.log(hash);

    grid.push(mapper[hash[i]]);
  }
  console.log(grid);
};
