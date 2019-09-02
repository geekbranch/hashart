import React from "react";
import "./CustomCell.css";


const CustomCell = ({colorHex, customStyle}) => {
  //return <div className="cell" key={colorHex} style={customStyle}></div>
  return <div className="flex-square" key={colorHex} style={customStyle}></div>
}

export default CustomCell;
