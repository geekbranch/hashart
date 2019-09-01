//const dataHash = require("./generate-hash");
const mapper =  {
  "0": "#1a1c2c",
  "1": "#5d275d",
  "2": "#b13e53",
  "3": "#ef7d57",
  "4": "#ffcd75",
  "5": "#a7f070",
  "6": "#38b764",
  "7": "#257179",
  "8": "#29366f",
  "9": "#3b5dc9",
  "a": "#41a6f6",
  "b": "#73eff7",
  "c": "#f4f4f4",
  "d": "#94b0c2",
  "e": "#566c86",
  "f": "#333c57"
}

const gridColors = (algorithm, data) => {
  //let hash = dataHash(algorithm, data).message.split("");
  let hash = "3421"
  let grid = [];
  for (let i = 0; i < 4; i++) {
    console.log(hash);

    grid.push(mapper[hash[i]]);
  }
  console.log(grid);
  return grid;
};


const paint = colors => {
  const totalBlocks = colors.length;
  const rows = Math.sqrt(totalBlocks);

  const cells = document.getElementsByClassName("cell");

  for (let item = 0; item < cells.length; item++) {
    cells[item].style.background = colors[item]
  }

};

paint(gridColors("sha256", "rudra"));
