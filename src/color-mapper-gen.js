let mapper = {
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
  a: "#41a6f6",
  b: "#73eff7",
  c: "#f4f4f4",
  d: "#94b0c2",
  e: "#566c86",
  f: "#333c57"
};

// let arr = `#1a1c2c,#5d275d,#b13e53,#ef7d57,#ffcd75,#a7f070,#38b764,#257179,#29366f,#3b5dc9,#41a6f6,// #73eff7,#f4f4f4,#94b0c2,#566c86,#333c57`;

let hexcode = arr.split(",").map(e => e.toString());

hexcode.forEach((hex, index) => {
  mapper[index.toString()] = hex;
});

console.log(mapper);
