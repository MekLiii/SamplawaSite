import React from "react";
import './aktu.module.css'

function AktuEl({ img, heading, text, data }) {
  return (
    <div style={box} className="box">
      <div style={leftSide}>
        <img src={img} style={imagine} />
      </div>
      <div style={rightSide}>
        <p>{data}</p>
        <h1>{heading}</h1>
        <p>{text}</p>
      </div>

    </div>
  );
}

const box = {
    width: '100%',
    backgroundColor: "#fed053",
    display: 'flex',
    margin: '10px'
}

const leftSide = {
    display: 'flex',
    padding: "10px"
};
const rightSide = {};
const imagine = {
  width: "150px",
  height: "150px",
};

export default AktuEl;
