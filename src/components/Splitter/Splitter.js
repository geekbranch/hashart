import React from "react";
import SplitPane from "react-split-pane";
import PropTypes from 'prop-types';
import "./Spiltter.css"

function Splitter({leftPane, rightPane}) {
  return (
    <SplitPane split="vertical" defaultSize="50%" >
      <div>{leftPane}</div>
        <div>{rightPane}</div>
    </SplitPane>

  )
}

Splitter.propTypes = {
  leftPane: PropTypes.element.isRequired,
  rightPane: PropTypes.element.isRequired
};

export default Splitter;
