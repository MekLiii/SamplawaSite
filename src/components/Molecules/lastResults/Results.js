import React from "react";
import mecz from "../../../../content/mecz.json";
import './result.module.css'

function Results() {
  const arrayLenght = mecz.mecz.length;
  const data = mecz.mecz[arrayLenght - 1];
  // console.log(arrayLenght)
  return (
    <div style={cointainer}>
      {/* <div>
        <p style={{fontSize:"2rem"}}>Ostatni mecz</p>
      </div> */}
      <div style={resultBox}>
      <p style={{fontSize:"2rem"}}>Ostatni mecz</p>
        <p style={{fontSize:"2rem"}}>
          {data.gospodarze} - {data.goscie}
        </p>
        <p style={{fontSize:"1.5rem"}}>
          {data.bramkiGospodarza}:{data.bramkiGoscia}
        </p>
        <p>{data.data}</p>
      </div>
    </div>
  );
}

const cointainer = {
  width: "90%",
  height: "500px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};
const resultBox = {
  width: "90%",
  height: "50%",
  backgroundColor: "#fed053",
  border: "4px solid #2a2e34",
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  flexDirection: 'column',
  borderRadius: '10px', 
};

export default Results;
