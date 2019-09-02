import React from "react";
import CustomCell from "../../shared/customCell/CustomCell.js";
import "./Chart.css";

const Chart = ({ colorArray }) => {
  const totalBlocks = colorArray.length;

  return (
    <div>
      <div id="grid">
        {colorArray.map(item => {
          const style = {
            background: item
          };
          return <CustomCell colorHex={item} key={item} customStyle={style} />;
        })}
      </div>
    </div>
  );
};

export default Chart;
