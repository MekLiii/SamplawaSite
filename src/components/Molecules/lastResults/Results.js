import React from "react";
import mecz from "../../../../content/mecz.json";

function Results() {
  const arrayLenght = mecz.mecz.length;
  const data = mecz.mecz[arrayLenght - 1];
  console.log(mecz);
  console.log(arrayLenght);
  console.log(data);
  // console.log(arrayLenght)
  return (
    <div style={cointainer}>
      <div>
        <p style={{fontSize:"2rem"}}>Ostatni mecz</p>
      </div>
      <div style={resultBox}>
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
  height: "90%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};
const resultBox = {
  width: "90%",
  height: "50%",
  backgroundColor: "white",
  border: "4px solid #fed053",
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  flexDirection: 'column',
  borderRadius: '10px', 
};

export default Results;
