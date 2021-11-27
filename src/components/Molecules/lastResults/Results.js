import React from "react";
import mecz from "../../../../content/mecz.json";
import "./result.module.css";

function Results() {
  const arrayLenght = mecz.mecz.length;
  const data = mecz.mecz[arrayLenght - 1];
  // console.log(arrayLenght)
  return (
    <div style={cointainer}>
      <div style={resultBox}>
        <p style={{ fontSize: "2rem" }}>Ostatni mecz</p>
        <p style={{ fontSize: "clamp(1rem, 7vmin, 1.5rem)" }}>
          <img />{data.gospodarze} - {data.goscie}
        </p>
        <p style={{ fontSize: "1.5rem" }}>
          {data.bramkiGospodarza}:{data.bramkiGoscia}
        </p>
        <p>{data.data}</p>
      </div>
    </div>
  );
}

const cointainer = {
  width: "100%",
  height: "auto",
  // minHeight: "400px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  marginTop:"70px" 
};
const resultBox = {
  width: "90%",
  height: "auto",
  backgroundColor: "#fed053",
  border: "4px solid #2a2e34",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  flexDirection: "column",
  borderRadius: "10px",
};

export default Results;
